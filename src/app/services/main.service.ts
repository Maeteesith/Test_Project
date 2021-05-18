import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http: HttpClient
  ) { }

  get(_url: string, path: string, httpParams: any): Observable<any> {
    const url = _url
    const httpOptions = {
      headers: { Authorization: '' }, // for get JWT to send request
      params: httpParams,
    };
    return this.http.get<any>(url, httpOptions).pipe(
      map((res) => {
        return this.validateResponse(res, url, "GET");
      }),
      catchError(this.handleError<any>(url))
    );
  }

  validateResponse(res: any, url: string, type: string): any {
    console.log(`%ccall[${type}] ${url}`, "color: orange", res);
    if (res.is_error) {

      return false;
    } else {
      return res.data;
    }
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log("handleError", error);
      return of(result as T);
    };
  }
}

