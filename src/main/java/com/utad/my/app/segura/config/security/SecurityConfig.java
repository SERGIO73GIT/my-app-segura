package com.utad.my.app.segura.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.client.filter.OAuth2ClientContextFilter;
import org.springframework.security.web.authentication.LoginUrlAuthenticationEntryPoint;
import org.springframework.security.web.authentication.preauth.AbstractPreAuthenticatedProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig
        extends WebSecurityConfigurerAdapter {

    @Autowired
    private OpenIdConnectFilter openIdConnectFilter;

    @Override
    protected void configure(
            AuthenticationManagerBuilder auth)
            throws Exception {
        super.configure(auth);
    }

    @Override
    protected void configure(
            HttpSecurity http)
            throws Exception {

        // OAuth2.
        http
                .addFilterAfter(new OAuth2ClientContextFilter(), AbstractPreAuthenticatedProcessingFilter.class)
                .addFilterAfter(openIdConnectFilter, OAuth2ClientContextFilter.class)
                .httpBasic().authenticationEntryPoint(new LoginUrlAuthenticationEntryPoint("/oauth2-callback"));
        // Authorization.
        // Authorization.
        http.authorizeRequests()

                // Allow Base URLs
                .and().authorizeRequests().antMatchers("/api/user/login").permitAll()
                .and().authorizeRequests().antMatchers("/api/session/info").permitAll()

                // Require Authentication for any other URL
                .and().authorizeRequests().anyRequest().fullyAuthenticated()
                .and()
                .logout().logoutRequestMatcher(new AntPathRequestMatcher("/api/session/logout"))
                .logoutSuccessUrl("/login").deleteCookies("JSESSIONID")
                .invalidateHttpSession(true);

        // CSRF.
        http.csrf().disable();

    }

}
