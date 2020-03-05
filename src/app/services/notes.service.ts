import { Injectable } from '@angular/core';
import { HttpHandlerService } from './http-handler.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpService: HttpHandlerService) { }

  private httpOptions = {
    headers : new HttpHeaders({ 'Content-Type' : 'application/json'})
  };
}
