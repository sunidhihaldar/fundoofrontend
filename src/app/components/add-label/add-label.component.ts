import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { LabelsService } from 'src/app/services/labels.service';
import { LabelModel } from 'src/app/model/label-model';
import { NoteModel } from 'src/app/model/note-model';

@Component({
  selector: 'app-add-label',
  templateUrl: './add-label.component.html',
  styleUrls: ['./add-label.component.scss']
})
export class AddLabelComponent implements OnInit {

  note: NoteModel;
  label: LabelModel;
  
  constructor(private labelService: LabelsService) { }

  ngOnInit() {
  }

  onClickAddLabel() {
    console.log('Add label clicked');
    this.labelService.addLabel(this.label, this.note).subscribe((response: any) => {
      console.log('Label added: ', this.label.labelName, this.note.noteId);
      console.log('Response: ', response);
    },
    error => {
      console.log(error);
    });
  }
}
