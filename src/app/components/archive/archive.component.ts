import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { Router } from '@angular/router';
import { NoteModel } from 'src/app/model/note-model';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  note: NoteModel;
  archiveNotes = [];

  constructor(private noteService: NotesService,
              private router: Router) {
                this.noteService.autoRefresh$.subscribe(() => {
                  this.getAllArchiveNotes();
                });
              }

  ngOnInit() {
    this.getAllArchiveNotes();
  }

  getAllArchiveNotes() {
    console.log('Archive notes');
    this.noteService.getAllArchivedNotes().subscribe((response: any) => {
      this.archiveNotes = response.object;
      console.log('Response: ', response.object)
    });
  }
}
