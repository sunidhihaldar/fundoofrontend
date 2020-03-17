import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteModel } from 'src/app/model/note-model';
import { LabelsService } from 'src/app/services/labels.service';
import { MatDialog } from '@angular/material';
import { LabelComponent } from '../label/label.component';
import { LabelModel } from 'src/app/model/label-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  show: boolean = true;
  name = localStorage.firstName;
  pic = 'assets/icons/index.png';
  reminder:NoteModel;
  listLabels: LabelModel[];
  label: LabelModel[];

  constructor(private router: Router,
              private labelService: LabelsService,
              private dialog: MatDialog) { 
                this.labelService.autoRefresh.subscribe(() => {
                  this.getAllLabels();
                });
              }

  ngOnInit() {
    this.getAllLabels();
  }

  refresh(): void {
    window.location.reload();
  }

  changeView(show: boolean) {
    this.show = !show;
    console.log(this.show);
  }

  logout() {
    console.log('Logged out', name);
    localStorage.clear();
    this.router.navigate(['login']);
  }

  navigateToNotes() {
    this.router.navigate(['dashboard/note']);
  }

  navigateToReminder() {
    this.router.navigate(['dashboard/reminder']);
  }

  navigateToArchive() {
    this.router.navigate(['dashboard/archive']);
  }

  navigateToTrash() {
    this.router.navigate(['dashboard/trash']);
  }

  getAllLabels() {
    this.labelService.getAllLabels().subscribe((response: any) => {
      this.listLabels = response.object;
      console.log(response.object);
    });
   }

   openDialog() {
     const dialogRef = this.dialog.open(LabelComponent, {
       width: '330px',
       height: '200px',
       panelClass: 'custom-dialog-container'
     });
     dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
   }
  
}