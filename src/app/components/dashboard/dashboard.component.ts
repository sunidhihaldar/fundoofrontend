import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteModel } from 'src/app/model/note-model';
import { LabelsService } from 'src/app/services/labels.service';

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
  listLabels = [];

  constructor(private router: Router,
              private labelService: LabelsService) { }

  ngOnInit() {
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

   getAllLabelss() {
  //   this.labelService.getAllLabels().subscribe((response: any) => {
  //     this.listLabels = response.object;
  //     console.log(response.object);
  //   });
   }
  
}