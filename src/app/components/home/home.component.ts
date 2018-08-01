import { Component, OnInit } from '@angular/core';
// import {MatTableDataSource} from '@angular/material';
// import { TabGroupAsyncExampleComponent } from './tab1.component';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  navLinks = [
    { path: 'hwc', label: 'HWC' },
    { path: 'compensation', label: 'Compensation' },
    { path: 'dailyCount', label: 'Daily Count' },
    { path: 'publicity', label: 'Publicity' },
  ];



}
