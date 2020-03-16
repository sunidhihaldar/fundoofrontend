import { Component, OnInit } from '@angular/core';
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

  constructor(private labelService: LabelsService) { }

  ngOnInit() {
  }

}
