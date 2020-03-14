import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { MatSnackBar } from '@angular/material';
import { NoteModel } from 'src/app/model/note-model';

@Component({
  selector: 'app-note-iconlist',
  templateUrl: './note-iconlist.component.html',
  styleUrls: ['./note-iconlist.component.scss']
})
export class NoteIconlistComponent implements OnInit {

  @Input() note: NoteModel;
  notes: NoteModel;

  constructor(private noteService: NotesService,
              private matSnackbar: MatSnackBar) { }

  ngOnInit() {
  }

  onClickDelete() {
    console.log('Delete note ', this.note.noteId);
    this.noteService.deleteNote(this.note.noteId).subscribe((response: any) => {
      console.log('Response: ', response);
      this.matSnackbar.open(response.message, 'Ok', { duration: 5000});
    },
    error => {
      console.log(error);
      this.matSnackbar.open('Note not deleted', 'Ok', { duration: 4000});
    });
  }

  onClickArchive() {
    console.log('Archive note ', this.note.noteId);
    this.noteService.archiveNote(this.note.noteId).subscribe((response: any) => {
      console.log('Response ', response);
      this.matSnackbar.open(response.message, 'Ok', { duration: 5000});
    },
    error => {
      console.log(error);
      this.matSnackbar.open('Note not archived', 'Ok', { duration: 5000});
    });
  }
}