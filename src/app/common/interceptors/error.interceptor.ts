import { HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpInterceptor } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs";
export class ErrorInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) =>{
                    let errorMessage = '';
                    if(error.error instanceof ErrorEvent){
                        //Client side error
                        errorMessage = 'Error: ${iError.error.message}';
                    }else{
                        //Server side error
                        errorMessage = 'Error code: ${iError.status}\nMessage: ${iError.message}';
                        
                    }
                    console.log(errorMessage);
                    return throwError(()=>{
                        return errorMessage;
                    });
                })
            )
    }
}