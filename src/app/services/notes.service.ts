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
    return this.httpService.post(`${environment.noteApiUrl + environment.createNoteUrl}`, note, this.httpOptions);
  }

  public updateNote(note: any) {
    return this.httpService.put(`${environment.noteApiUrl}`, note, this.httpOptions);
  }

  public getAllNotes() {
    return this.httpService.get(`${environment.noteApiUrl + environment.getAllNotesUrl}`, this.httpOptions);
  }

  public pinNote(note: any) {
    console.log('Note pin');
    return this.httpService.put(`${environment.noteApiUrl}`, note, this.httpOptions);
  }

  public archiveNote(note: any) {
    console.log('Note archived');
    return this.httpService.put(`${environment.noteApiUrl}`, note, this.httpOptions);
  }

  public setReminder(note: any) {
    console.log('Reminder set');
    return this.httpService.put(`${environment.noteApiUrl}`, note, this.httpOptions);
  }

  public restoreNote(note: any) {
    console.log('Note restored');
  }

  public getAllArchivedNotes() {
    console.log('Get all archived notes');
    return this.httpService.get(`${environment.noteApiUrl}`, this.httpOptions);
  }

  public getAllTrashedNotes() {
    console.log('Trashed notes');
    return this.httpService.get(`${environment.noteApiUrl}`, this .httpOptions);
  }

  public getAllReminderNotes() {
    console.log('Get all reminder notes');
    return this.httpService.get(`${environment.noteApiUrl}`, this.httpOptions);
  }
}