import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {

  constructor(private http: HttpClient) { }

  post(url: any, body: any, options: any): Observable<any> {
    return this.http.post(url, body, options);
  }

  get(url: any, options: any): Observable<any> {
    return this.http.get(url, options);
  }

  put(url: any, body: any, options: any): Observable<any> {
    return this.http.put(url, body, options);
  }
  
  delete(url: any, options: any): Observable<any> {
    return this.http.delete(url, options);
  }
}
