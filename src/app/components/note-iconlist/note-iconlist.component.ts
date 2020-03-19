import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { MatSnackBar } from '@angular/material';
import { NoteModel } from 'src/app/model/note-model';
import { formatDate } from '@angular/common';
import { LabelsService } from 'src/app/services/labels.service';
import { LabelModel } from 'src/app/model/label-model';

@Component({
  selector: 'app-note-iconlist',
  templateUrl: './note-iconlist.component.html',
  styleUrls: ['./note-iconlist.component.scss']
})
export class NoteIconlistComponent implements OnInit {

  @Input() note: NoteModel;
  notes: NoteModel;
  label: LabelModel;
  listLabels = [];

  public dateTime: any;

  constructor(private noteService: NotesService,
              private labelService: LabelsService,
              private matSnackbar: MatSnackBar) { 
                this.labelService.autoRefresh.subscribe(() => {
                  this.getAllLabels();
                });
              }

  ngOnInit() {
    this.getAllLabels();
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

    getAllLabels() {
      this.labelService.getAllLabels().subscribe((response: any) => {
        this.listLabels = response.object;
      });
     }

     onClickAddLabel(labelId, noteId) {
      console.log('Add label clicked');
      this.labelService.addLabel(labelId, noteId).subscribe((response: any) => {
        console.log('Label added: ', labelId, noteId);
        console.log('Response: ', response);
      },
      error => {
        console.log(error);
      });
    }
}