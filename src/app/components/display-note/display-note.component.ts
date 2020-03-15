import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { NoteModel } from 'src/app/model/note-model';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {

  note: NoteModel = new NoteModel();
  isArchived: boolean;
  isTrashed: boolean;
  listNotes = [];
  expand: boolean = true;
  token = localStorage.getItem('token');

  pinNotes = [];
  pin: boolean = true;
  unpin: boolean = true;

  constructor(private noteService: NotesService,
              private router: Router,
              private matSnackbar: MatSnackBar,
              private dialog: MatDialog) { 
                this.noteService.autoRefresh$.subscribe(() => {
                  this.getAllNotes();
                });
              }

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

  // pinNote(noteId) {
  //   console.log('pin note called');
  //   this.noteService.pinNote(noteId).subscribe(response => {
  //     if(!this.pin) {
  //       this.matSnackbar.open('Note pinned', 'Ok', { duration: 4000 });
  //       this.pin = true;
  //     }
  //     if(!this.unpin) {
  //       this.matSnackbar.open('Note unpinned', 'Ok', { duration: 4000});
  //       this.unpin = true;
  //     }
  //   },
  //   error => {
  //     console.log(error);
  //     this.matSnackbar.open('Error....', 'Ok', { duration: 4000});
  //   });
  // }
  
  onClickNoteId(id) {
    this.noteService.pinNote(id);
  }

  openDialog(note): void {
    console.log('note id: ', note.noteId);
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '800px',
      height: '300px',
      panelClass: 'custom-dialog-container',
      data: { note }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}