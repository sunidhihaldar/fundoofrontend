import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  noteForm: FormGroup;
  private expand: boolean = false;

  constructor() { }

  ngOnInit() {
    this.noteForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl('')
    });
  }

  expandNote() {
    this.expand = true;
  }

}
