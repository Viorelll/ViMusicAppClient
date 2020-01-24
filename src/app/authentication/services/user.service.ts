import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { configurationFactory } from '../auth.config';
import { OAuthService } from 'angular-oauth2-oidc';
import { User } from '../models/user.model';
import { catchError, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private baseUrl = 'api/user/createUser';
  private apiHost = null;
  user = new BehaviorSubject<User>(null);
  
  constructor(private httpService: HttpClient, private route: ActivatedRoute, private router: Router, private oauthService: OAuthService) {
    this.apiHost = configurationFactory().apiHost;
  }

  public onLogin() {
    const callbackUrl = this.route.snapshot.queryParams.returl;
    this.oauthService.initImplicitFlow(callbackUrl);
  }

  public onLogout() {
    this.oauthService.logOut();
    this.user.next(null);
    this.router.navigate(['/']);
  }

  public autoLogin() {
    if(!this.oauthService.hasValidAccessToken())
      return;

    let claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;

    const loadedUser = new User(claims['name'], claims['email']);
    this.user.next(loadedUser);
  }


  public registerUser(): Observable<any> {
    const callbackUrlToken = new URLSearchParams(this.route.snapshot.fragment).get('id_token');
    const httpOptions = {
      headers: new HttpHeaders({'access_token': callbackUrlToken})
    } 
    return this.httpService
            .post<any>(`${this.apiHost}/${this.baseUrl}`, null, httpOptions)
            .pipe(
              catchError(this.handleError),
              tap(() => {              
                let claims = this.oauthService.getIdentityClaims();
                if (!claims) return null;

                const user = new User(claims['name'], claims['email']);
                this.user.next(user);
              })
          );
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';

    // if (!errorResponse || !errorResponse.error.error) {
    //     return throwError(errorMessage);
    // }
    console.log(`handleError: ${errorResponse}`);
    return throwError(errorMessage);
  }
}
