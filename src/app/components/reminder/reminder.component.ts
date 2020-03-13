import { Component, OnInit, Inject, Input } from '@angular/core';
import { NoteModel } from 'src/app/model/note-model';
import { NotesService } from 'src/app/services/notes.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {

  note: NoteModel = new NoteModel();
  reminderNotes: NoteModel[];
  public notes = [];
  isTrashed: boolean;

  constructor(private noteService: NotesService,
              private router: Router
              //private dialog: MatDialog,
              //public dialogRef: MatDialogRef<ReminderComponent>,
              //@Inject(MAT_DIALOG_DATA) public data: any
              ) { 
                this.noteService.autoRefresh$.subscribe(() => {
                  this.getAllReminderNotes();
                });
              }

  ngOnInit() {
      this.getAllReminderNotes();
  }

  getAllReminderNotes() {
    console.log('Reminder notes');
    this.isTrashed = false;
    this.noteService.getAllReminderNotes().subscribe((response: any) => {
      this.reminderNotes = response.object;
      console.log('Response ',response.object);
    });
  }

}