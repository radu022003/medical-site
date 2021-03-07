import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IContact } from "./IContact.module";
import { catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable()
export class ContactService{

    constructor(private http: HttpClient){

    }

    sendEmail(contact: IContact){
        console.log(contact);
        const url = "/api/sendEmail";
        const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
        return this.http.post(url, contact, options)
            .pipe(catchError(err =>{
            return of(false);
        }));
    }

    private handleError<T>(operation = 'operation', result?: T){
        return (error:any): Observable<T> => {
          console.error(error);
          return of(result as T);
        }
      }
}