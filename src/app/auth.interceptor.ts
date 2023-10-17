import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);

//     const updatedRequest = request.clone({

//       params : new HttpParams({
//         'apiKey':'a7e6cb75206ba0212cfd560483d20ab1'
//       }),
     
//     })
//     console.log("Interceptor", updatedRequest)
//     return next.handle(updatedRequest);
  
// 
}
}

//  setParams:


