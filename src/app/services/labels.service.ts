import { Injectable } from '@angular/core';
import { HttpHandlerService } from './http-handler.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LabelsService {

  constructor(private httpService: HttpHandlerService) { }

  private httpOptions = {
    headers : new HttpHeaders({ 'Content-Type' : 'application/json', token: localStorage.getItem('token')})
  };

  getAllLabels() {
    this.httpService.get(`${environment.labelApiUrl + environment.getAllLabelsUrl}`, this.httpOptions);
  }
}