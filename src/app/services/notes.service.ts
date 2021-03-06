import { Injectable } from '@angular/core';
import { HttpHandlerService } from './http-handler.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private _autoRefresh$ = new Subject();

  constructor(private httpService: HttpHandlerService) { }

  private httpOptions = {
    headers : new HttpHeaders({ 'Content-Type' : 'application/json', token: localStorage.getItem('token')})
  };

  get autoRefresh$() {
    return this._autoRefresh$;
  }

  public createNote(note: any, token: any) {
    console.log('entered into update note in service');
    console.log('Token ', token);
    return this.httpService.post(`${environment.noteApiUrl + environment.createNoteUrl}`, note, { headers: new HttpHeaders().
         set('token',  localStorage.token)}).pipe(tap(() => {
             this._autoRefresh$.next();
         }));
  }

  public updateNote(note: any) {
    return this.httpService.put(`${environment.noteApiUrl + environment.updateNote}`, note, { headers: new HttpHeaders().
      set('token',  localStorage.token)}).pipe(tap(() => {
          this._autoRefresh$.next();
      }));
  }

  public getAllNotes() {
    return this.httpService.get(`${environment.noteApiUrl + environment.getAllNotesUrl}`, this.httpOptions);
  }

  public pinNote(note: any) {
    console.log('Note pin');
    const params = new URLSearchParams();
    console.log('noteId: ', note);
    // params.set('noteId', note);
    return this.httpService.post(`${environment.noteApiUrl + environment.pinNote}/${note}`, {}, {headers: new HttpHeaders().set('token', localStorage.token)}).pipe(tap(() => {
      this.autoRefresh$.next();
    }));
  }

  public archiveNote(note: any) {
    console.log('Note archive service');
    return this.httpService.post(`${environment.noteApiUrl + environment.archiveNoteUrl}/${note}`, note, {headers: new HttpHeaders().set('token', localStorage.token)}).pipe(tap(() => {
      this.autoRefresh$.next();
    }));
  }

  public setReminder(note: any) {
    console.log('Reminder set');
    return this.httpService.put(`${environment.noteApiUrl + environment.reminderUrl}/${note}`, note, {headers: new HttpHeaders().set('token', localStorage.token)}).pipe(tap(() => {
      this.autoRefresh$.next();
    }));
  }

  public restoreNote(note: any) {
    console.log('Note restored');
    return this.httpService.post(`${environment.noteApiUrl + environment.restoreNoteUrl}/${note}`, note, {headers: new HttpHeaders().set('token', localStorage.token)}).pipe(tap(() => {
      this.autoRefresh$.next();
    }));
  }

  public getAllArchivedNotes() {
    console.log('Get all archived notes');
    return this.httpService.get(`${environment.noteApiUrl + environment.getAllArchivedNotesUrl}`, this.httpOptions);
  }

  public getAllTrashedNotes() {
    console.log('Trashed notes');
    return this.httpService.get(`${environment.noteApiUrl + environment.getAllTrashNotesUrl}`, this .httpOptions);
  }

  public getAllReminderNotes() {
    console.log('Get all reminder notes');
    return this.httpService.get(`${environment.noteApiUrl + environment.getAllReminderNotesUrl}`, this.httpOptions);
  }

  public deleteNote(note: any) {
    console.log('note deleted');
    return this.httpService.post(`${environment.noteApiUrl + environment.deleteNoteUrl}/${note}`, note, { headers: new HttpHeaders().
      set('token',  localStorage.token)}).pipe(tap(() => {
          this._autoRefresh$.next();
      }));
  }

  public updateColour(noteId: any, colour: string) {
    console.log('Update colour service ',`${environment.noteApiUrl + environment.updateColourUrl}/${noteId}?colour=${colour}`);
    return this.httpService.put(`${environment.noteApiUrl + environment.updateColourUrl}/${noteId}?colour=${colour}`, noteId, { headers: new HttpHeaders().
      set('token',  localStorage.token)}).pipe(tap(() => {
          this._autoRefresh$.next();
      }));
  }

  public deleteNotePermanently(note: any) {
    console.log('Delete note permanently service');
    return this.httpService.delete(`${environment.noteApiUrl + environment.deleteNotePermanentlyUrl}/${note}`, { headers: new HttpHeaders().
      set('token',  localStorage.token)}).pipe(tap(() => {
          this._autoRefresh$.next();
      }));
  }
}