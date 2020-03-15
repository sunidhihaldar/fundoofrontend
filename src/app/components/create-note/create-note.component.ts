import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { NotesService } from 'src/app/services/notes.service';
import { NoteModel } from 'src/app/model/note-model';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  noteForm: FormGroup;
  private expand: boolean = false;
  token: string = localStorage.getItem('token');
  isPinned: boolean;
  note: NoteModel;

  constructor(private noteService: NotesService,    
              private matSnackbar: MatSnackBar) {}
  
  onPin() {
    this.isPinned = !this.isPinned;
  }

  ngOnInit() {
    this.noteForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  expandNote() {
    this.expand = true;
  }

  ngOnclose() {
    if(this.noteForm.value.title == '' && this.noteForm.value.description == '') {
      this.expand = !this.expand;
      console.log('close');
      return console.log('Value ',this.noteForm.value);
    }
    if(this.noteForm.value.title !== '' &&  this.noteForm.value.description !== '') {
      this.noteService.createNote(this.noteForm.value, this.token).subscribe((response: any) => {
        console.log('Response ', response);
        console.log(response.message);
        console.log(response.note);
        this.expand =!this.expand;
        this.noteForm.reset();
        this.matSnackbar.open("Succesfully added note", "ok", { duration: 5000 })
    },
      error => {
        console.log("error", error);
        this.matSnackbar.open("Failed to add note", "ok", { duration: 5000 });
      }
    );
    }
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

  colors =
    [
      [{ name: 'white', value: 'white' }, { name: 'Yellow', value: 'yellow' }, { name: 'lightblue', value: 'lightblue' },],
    
      [{ name: 'Brown', value: 'brown' }, { name: 'pink', value: 'pink' }, { name: 'orange', value: 'orange' }, ],
  
      [ { name: 'red', value: 'red' }, { name: 'aqua', value: 'aqua' }, { name: 'silver', value: 'silver' }]
    ];
}