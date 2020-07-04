import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable()
export class HeroesApiService {

  header = {
    headers: new HttpHeaders()
      .set('Authorization', `Bearer ${this.oauthService.getAccessToken()}`)
    }

  constructor(private http: HttpClient, private oauthService: OAuthService) {
  }

  getHeroes(): Observable<any> {
    return this.http.get('/api/heroes', this.header);
  }

}
