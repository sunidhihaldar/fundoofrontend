import { Injectable } from '@angular/core';
import { HttpHandlerService } from './http-handler.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabelsService {

  constructor(private httpService: HttpHandlerService) { }

  private httpOptions = {
    headers : new HttpHeaders({ 'Content-Type' : 'application/json', token: localStorage.getItem('token')})
  };

  getAllLabels(): Observable<any> {
    return this.httpService.get(`${environment.labelApiUrl + environment.getAllLabelsUrl}`, this.httpOptions);
  }

  createLabel(label: any, token: any) {
    return this.httpService.post(`${environment.labelApiUrl + environment.createLabelUrl}`, label, this.httpOptions);
  }
}