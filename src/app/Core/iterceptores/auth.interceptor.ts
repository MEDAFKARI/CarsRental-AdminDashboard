import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, mergeMap, throwError, of, finalize, delay } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authstate:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('/signin') || request.url.includes('/signup')
    ) {
      return next.handle(request);
    }
    
      return this.getToken().pipe(
        mergeMap((token) => {
          console.log(token);
          request = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${token}`)
          });
          return next.handle(request).pipe(
            delay(500),
            catchError((error: any) => {
              if (error && error.status) {
                if (error.status === 401) {
                  console.log("Error: Unauthorized");
                }
              } else {
                return throwError(error);
              }
              return of(error);
            })
          );
        }
      )
      );
   }
  
   getToken(): Observable<string> {
      const token = this.authstate.getToken();
      console.log(token);
      return of(token ? token : "");
   }

}
