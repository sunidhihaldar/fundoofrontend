import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { NotesService } from 'src/app/services/notes.service';

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

  constructor(private noteService: NotesService,    
              private snackBar: MatSnackBar) {}
  
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