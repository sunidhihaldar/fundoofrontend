import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {

  isArchived: boolean;
  isTrashed: boolean;
  listNotes = [];
  expand: boolean = true;

  constructor(private noteService: NotesService,
              private router: Router,
              private matSnackbar: MatSnackBar) { }

  ngOnInit() {
    this.getAllNotes();
  }

  getAllNotes() {
    this.isArchived = false;
    this.isTrashed = false;
    this.noteService.getAllNotes().subscribe((response: any) => {
      this.listNotes = response.object;
      console.log(response.object);
    });
  }

}
