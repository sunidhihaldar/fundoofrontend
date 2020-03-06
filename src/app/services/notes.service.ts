import { Injectable } from '@angular/core';
import { HttpHandlerService } from './http-handler.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpService: HttpHandlerService) { }

  private httpOptions = {
    headers : new HttpHeaders({ 'Content-Type' : 'application/json', token: localStorage.getItem('token')})
  };

  public createNote(note: any) {
    console.log('entered into create note in service');
    return this.httpService.post(`${environment.noteApiUrl + environment.createNote}`, note, this.httpOptions);
  }
}
