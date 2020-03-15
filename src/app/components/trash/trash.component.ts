import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NotesService } from 'src/app/services/notes.service';
import { Router } from '@angular/router';
import { NoteModel } from 'src/app/model/note-model';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  trashNotes = [];
  @Input() note: NoteModel;

  constructor(private noteService: NotesService,
              private router: Router,
              private matSnackbar: MatSnackBar) { 
                this.noteService.autoRefresh$.subscribe(() => {
                  this.getAllTrashedNotes();
                });
              }

  ngOnInit() {
    this.getAllTrashedNotes();
  }

  getAllTrashedNotes() {
    console.log('Trashed Notes');
    this.noteService.getAllTrashedNotes().subscribe((response: any) => {
      this.trashNotes = response.object;
      console.log('Response: ', response.object);
    });
  }

  onClickDeleteForever(noteId) {
    console.log('Delete note forever ', noteId);
    this.noteService.deleteNotePermanently(noteId).subscribe((response: any) => {
      this.matSnackbar.open(response.message, 'Ok', { duration: 5000});
    },
    error => {
      console.log(error);
      this.matSnackbar.open('Error.....not deleted', 'Ok', { duration: 5000 });
    });
  }

}