import { NotFound } from '../common/errors/not-found';
import { BadInput } from '../common/errors/bad-input';
import { HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError, retry,catchError } from 'rxjs';

export class DataService{
    
    constructor(private url:string, private http:HttpClient){}
    
    getAll(){
        //Add a retry so the app retries X times (in this case 1) and if it doesn't work, then throw an error
        return this.http.get(this.url,{
            observe:"response"
          }).pipe(retry(1),catchError(this.handleError));
    }

    create(resource:any): Observable<Object>{
        return this.http.post(this.url, resource,{
            observe:"response"
          }).pipe(catchError(this.handleError))
    }

    update(resource:any){
        return this.http.put(this.url + '/' + resource.id,resource,{
            observe:"response"
          }).pipe(catchError(this.handleError));
    }

    delete(i:number){
        return this.http.delete(this.url + '/' + i,{
            observe:"response"
          }).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse){
        if (error.status === 0){
            //A client-side or network error occured. Handle it accordinhgly.
            return throwError(() => new BadInput(error.error));
        }else{
            //The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error('Backend returned code ${error.status}, body was', error.error);
            if (error.status === 404){
                return throwError(() => new NotFound(error.error));
            }else if(error.status === 400){
                return throwError(() => new BadInput(error.error));
            }
        }

        //Return an observable with the error message to show the user
        return throwError(() => new Error('Someting bad happened; please try again'));
    }
}