import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroesApiService } from './service/heroes.api.service';
import { HeroesComponent } from './heroes/heroes.component';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:9090/api/heroes'],
        sendAccessToken: true
      }
    })
  ],
  providers: [HeroesApiService, OAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
