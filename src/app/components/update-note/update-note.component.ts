import { Component, OnInit, Inject } from '@angular/core';
import { NoteModel } from 'src/app/model/note-model';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  note: NoteModel;

  constructor(public dialogRef: MatDialogRef<UpdateNoteComponent>,
            @Inject(MAT_DIALOG_DATA) public data: any,
            private noteService: NotesService,
            private matSnackbar: MatSnackBar) { 
              this.note = this.data.note;
            }

  ngOnInit() {
  }

  onSubmit() {
    this.dialogRef.close();
    this.noteService.updateNote(this.note).subscribe((response) => {
      this.matSnackbar.open(response.message, 'Ok', { duration: 4000 });
    },
    error => {
      console.log(error);
      this.matSnackbar.open('Error!....Note not updated', 'Ok', { duration: 4000});
    });
  }
}