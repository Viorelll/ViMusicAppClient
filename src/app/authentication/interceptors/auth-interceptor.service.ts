import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { exhaustMap, take } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    /**
     *
     */
    constructor(private userService: UserService, private oauthService: OAuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.userService.user
        .pipe(
            take(1),
            exhaustMap(user => {
                if (!user) {
                    return next.handle(req);
                }
                const modifiedRequest = req.clone(
                    { headers: req.headers.set('access_token', this.oauthService.getIdToken())}
                );

                return next.handle(modifiedRequest);
            })
        );
    }
}