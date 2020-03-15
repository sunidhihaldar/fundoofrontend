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

  updateColour(colour) {
    console.log('Colour: ', colour);
    this.noteService.updateColour(this.note.noteId, colour).subscribe((response: any) => {
      this.matSnackbar.open(response.message, 'Ok', { duration: 5000 });
    },
    error => {
      console.log(error);
      this.matSnackbar.open('Colour not updated', 'Ok', { duration: 5000});
    });
  }
  //rgb(255, 179, 255)
  arrayOfColours = [
    [
      { colour: "pink", name: "pink" },
      { colour: "rgb(255, 255, 128)", name: "darkGolden" },
      { colour: "white", name: "white" }
    ],
    [
      { colour: "slategray", name: "grey" },
      { colour: "rgb(153, 221, 255)", name: "light blue" },
      { colour: "rgb(200, 232, 104)", name: "light green" }
    ],
    [
      { colour: "rgb(255, 153, 0)", name: "orange" },
      { colour: "rgb(97, 191, 82)", name: "green" },
      { colour: " rgb(158, 136, 191)", name: "purple" }
    ]
  ]

}