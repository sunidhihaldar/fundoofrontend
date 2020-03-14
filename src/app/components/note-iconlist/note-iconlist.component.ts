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
  noteId: number;

  constructor(private noteService: NotesService,
              private matSnackbar: MatSnackBar) { }

  ngOnInit() {
  }

  onClickDelete() {
    this.noteId = this.note.noteId;
    console.log('Delete note ', this.noteId);
    this.noteService.deleteNote(this.note.noteId).subscribe((response: any) => {
      console.log('Response: ', response);
      this.matSnackbar.open(response.message, 'Ok', { duration: 5000});
    },
    error => {
      console.log(error);
      this.matSnackbar.open('Note not deleted', 'Ok', { duration: 4000});
    });
  }
}