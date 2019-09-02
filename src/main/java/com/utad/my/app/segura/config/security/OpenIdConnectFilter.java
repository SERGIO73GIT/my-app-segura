package com.utad.my.app.segura.config.security;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.jwt.Jwt;
import org.springframework.security.jwt.JwtHelper;
import org.springframework.security.oauth2.client.OAuth2RestOperations;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.common.exceptions.InvalidTokenException;
import org.springframework.security.oauth2.common.exceptions.OAuth2Exception;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.utad.my.app.segura.dto.UserDto;
import com.utad.my.app.segura.services.UsersService;

@Service
public class OpenIdConnectFilter
        extends AbstractAuthenticationProcessingFilter {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private OAuth2RestOperations oAuth2RestOperations;

    @Autowired
    private UsersService usersService;

    @Autowired
    private HttpSession httpSession;

    public OpenIdConnectFilter() {
        super("/oauth2-callback");
        setAuthenticationManager(new NoopAuthenticationManager());
    }

    @Override
    public Authentication attemptAuthentication(
            HttpServletRequest request,
            HttpServletResponse response)
            throws AuthenticationException, IOException, ServletException {

        OAuth2AccessToken oAuth2Token = null;
        try {
            oAuth2Token = oAuth2RestOperations.getAccessToken();
        } catch (OAuth2Exception e) {
            throw new BadCredentialsException("Could not obtain access token", e);
        }

        Jwt jwt = null;
        try {
            jwt = JwtHelper.decode((String) oAuth2Token.getAdditionalInformation().get("id_token"));
        } catch (InvalidTokenException e) {
            throw new BadCredentialsException("Could not obtain user details from token", e);
        }

        Map<String, Object> claims = new ObjectMapper().readValue(jwt.getClaims(), new TypeReference<HashMap<String, Object>>() {});
        String email = (String) claims.get("email");
        UserDto userDto = usersService.checkRole(email);
        String role = userDto.getRole();

        httpSession.setAttribute("user-id", userDto.getUserId());

        return new UsernamePasswordAuthenticationToken(email, null, Arrays.asList(new SimpleGrantedAuthority(role)));

    }

    private static class NoopAuthenticationManager
            implements AuthenticationManager {

        @Override
        public Authentication authenticate(
                Authentication authentication)
                throws AuthenticationException {
            throw new UnsupportedOperationException("No authentication should be done with this AuthenticationManager");
        }

    }

    /*
     * public String POSTRequest(
     * String email)
     * throws IOException {
     * final String POST_PARAMS = "{\n" + "\"email\": \"" + email + "\"\r\n" + "\n}";
     * String role = "";
     * logger.info(POST_PARAMS);
     * URL obj = new URL("http://my-app-segura.com:8080/api/user/login");
     * HttpURLConnection postConnection = (HttpURLConnection) obj.openConnection();
     * postConnection.setRequestMethod("POST");
     * postConnection.setRequestProperty("Content-Type", "application/json");
     * postConnection.setDoOutput(true);
     * OutputStream os = postConnection.getOutputStream();
     * os.write(POST_PARAMS.getBytes());
     * os.flush();
     * os.close();
     * int responseCode = postConnection.getResponseCode();
     * logger.info("POST Response Code :  " + responseCode);
     * logger.info("POST Response Message : " + postConnection.getResponseMessage());
     * if (responseCode == HttpURLConnection.HTTP_OK) { // success
     * BufferedReader in = new BufferedReader(new InputStreamReader(
     * postConnection.getInputStream()));
     * String inputLine;
     * StringBuffer response = new StringBuffer();
     * while ((inputLine = in.readLine()) != null) {
     * response.append(inputLine);
     * }
     * in.close();
     * // print result
     * logger.info(response.toString());
     * role = new JSONObject(response.toString()).getString("role");
     * } else {
     * logger.info("POST NOT WORKED");
     * }
     * // JSONObject myResponse = new JSONObject(response.toString());
     * return role;
     * }
     */
}
