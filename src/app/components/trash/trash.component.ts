import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NotesService } from 'src/app/services/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  trashNotes = [];

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

}
