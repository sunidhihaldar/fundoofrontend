import { Injectable } from '@angular/core';
import { HttpHandlerService } from './http-handler.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LabelModel } from '../model/label-model';
import { NoteModel } from '../model/note-model';

@Injectable({
  providedIn: 'root'
})
export class LabelsService {

  private _autoRefresh$ = new Subject<any>();

  constructor(private httpService: HttpHandlerService) { }

  private httpOptions = {
    headers : new HttpHeaders({ 'Content-Type' : 'application/json', token: localStorage.getItem('token')})
  };

  get autoRefresh() {
    return this._autoRefresh$;
  }

  getAllLabels(): Observable<any> {
    return this.httpService.get(`${environment.labelApiUrl + environment.getAllLabelsUrl}`, this.httpOptions);
  }

  createLabel(label: LabelModel) {
    return this.httpService.post(`${environment.labelApiUrl + environment.createLabelUrl}`, label, { headers: new HttpHeaders().
      set('token',  localStorage.token)}).pipe(tap(() => {
          this._autoRefresh$.next();
      }));
  }

  addLabel(labelId: any, noteId: any) {
    console.log('Add label service');
    return this.httpService.post(`${environment.labelApiUrl + environment.addLabelUrl}?labelId=${labelId}&noteId=${noteId}`, {}, this.httpOptions);
  }

  deleteLabel(labelId: any) {
    return this.httpService.delete(`${environment.labelApiUrl + environment.deleteLabelUrl}?labelId=${labelId}`, this.httpOptions);
  }
}