import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { NoteModel } from 'src/app/model/note-model';
import { formatDate } from '@angular/common';
import { LabelsService } from 'src/app/services/labels.service';
import { LabelModel } from 'src/app/model/label-model';
import { AddLabelComponent } from '../add-label/add-label.component';

@Component({
  selector: 'app-note-iconlist',
  templateUrl: './note-iconlist.component.html',
  styleUrls: ['./note-iconlist.component.scss']
})
export class NoteIconlistComponent implements OnInit {

  @Input() note: NoteModel;
  notes: NoteModel;
  label: LabelModel;

  public dateTime: any;

  constructor(private noteService: NotesService,
              private matSnackbar: MatSnackBar,
              private dialog: MatDialog) { }

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

  colors =
    [
      [{ name: 'white', value: 'white' }, { name: 'Yellow', value: 'yellow' }, { name: 'lightblue', value: 'lightblue' },],
    
      [{ name: 'Brown', value: 'brown' }, { name: 'pink', value: 'pink' }, { name: 'orange', value: 'orange' }, ],
  
      [ { name: 'red', value: 'red' }, { name: 'aqua', value: 'aqua' }, { name: 'silver', value: 'silver' }]
    ];

    openDialog() {
      const dialogRef = this.dialog.open(AddLabelComponent, {
        width: 'auto',
        height: 'auto',
        panelClass: 'custom-dialog-container'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog closed');
      });
    }
}