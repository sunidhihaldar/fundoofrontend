import { Component, OnInit, Input, Inject } from '@angular/core';
import { LabelsService } from 'src/app/services/labels.service';
import { LabelModel } from 'src/app/model/label-model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  label: LabelModel = new LabelModel();
  token = localStorage.getItem('token');
  hitCancel: boolean;
  listLabels = [];

  constructor(private labelService: LabelsService,
              private dialogRef: MatDialogRef<LabelComponent>) { }

  ngOnInit() {
    this.getAllLabels();
  }

  cancel() {
    this.hitCancel = true;
  }

  createLabel() {
    console.log('Label creation: ', this.label.labelName);
    this.labelService.createLabel(this.label).subscribe((response: any) => {
      console.log(response);
    },
    error => {
      console.log(error);
    });
  }

  getAllLabels() {
    this.labelService.getAllLabels().subscribe((response: any) => {
      this.listLabels = response.object;
      console.log('Labels: ',response.object);
    });
   }

   onClickDeleteLabel(labelId) {
     console.log('Label delete ', labelId);
     this.labelService.deleteLabel(labelId).subscribe((response: any) => {
       console.log('Label deleted: ', response);
     },
     error => {
       console.log(error);
     });
   }

  onSubmit() {
    this.dialogRef.close();
    if(this.label.labelName !== null) {
      this.labelService.createLabel(this.label).subscribe((response: any) => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
    }
  }

}