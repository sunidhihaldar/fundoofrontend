import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { NotesService } from 'src/app/services/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  noteForm: FormGroup;
  private expand: boolean = false;

  constructor(private noteService: NotesService,
              private router: Router, 
              private snackBar: MatSnackBar,
              private notesService: NotesService) { }
    
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
      this.noteService.createNote(this.noteForm.value).subscribe((response: any) => {
        console.log('Response ', response);
        console.log(response.message);
        console.log(response.note);
        this.snackBar.open("Succesfully added note", "ok", { duration: 5000 })
    },
      error => {
        console.log("error", error);
        this.snackBar.open("Failed to add note", "ok", { duration: 5000 });
      }
    );
    }
  }
}