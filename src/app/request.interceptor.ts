import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  headers: HttpHeaders = new HttpHeaders()
    .set('token', '39483298742398749283abc')
    .set('cow_says', 'MoooOOOOooooooOOOOOOooOOOOo!');

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('The intercepted request: ', request);
    const newRequest = request.clone({ headers: this.headers });
    if (request.method === 'POST') {
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
