import { Component, OnInit, Input } from '@angular/core';
import { LabelsService } from 'src/app/services/labels.service';
import { LabelModel } from 'src/app/model/label-model';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  label: LabelModel = new LabelModel();
  token = localStorage.getItem('token');
  hitCancel: boolean;

  constructor(private labelService: LabelsService) { }

  ngOnInit() {
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

}