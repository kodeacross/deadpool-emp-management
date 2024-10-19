import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAuth0({
    domain: 'dev-oci2vqoeei4eau6g.jp.auth0.com',
    clientId: '7p5pev8bDDKYYLqhC7ORCSciaYWptuBf',
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })]
};
