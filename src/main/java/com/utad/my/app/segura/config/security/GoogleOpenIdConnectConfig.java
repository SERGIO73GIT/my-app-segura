package com.utad.my.app.segura.config.security;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.resource.OAuth2ProtectedResourceDetails;
import org.springframework.security.oauth2.client.token.grant.code.AuthorizationCodeResourceDetails;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client;

@Configuration
@EnableOAuth2Client
public class GoogleOpenIdConnectConfig {

    @Value("${my.property.clientid}")
    private String clientId;

    @Value("${my.property.clientsecret}")
    private String clientSecret;

    @Value("${my.property.userAuthorizationUri}")
    private String userAuthorizationUri;

    @Value("${my.property.accessTokenUri}")
    private String accessTokenUri;

    @Value("${my.property.redirectUri}")
    private String redirectUri;

    @Bean
    public OAuth2ProtectedResourceDetails googleOpenId() {
        final AuthorizationCodeResourceDetails details = new AuthorizationCodeResourceDetails();
        details.setClientId(clientId);
        details.setClientSecret(clientSecret);
        details.setUserAuthorizationUri(userAuthorizationUri);
        details.setAccessTokenUri(accessTokenUri);
        details.setScope(Arrays.asList("openid", "email"));
        details.setPreEstablishedRedirectUri(redirectUri);
        details.setUseCurrentUri(false);
        return details;
    }

    @Bean
    public OAuth2RestTemplate googleOpenIdTemplate(
            OAuth2ClientContext clientContext) {
        return new OAuth2RestTemplate(googleOpenId(), clientContext);
    }

}
