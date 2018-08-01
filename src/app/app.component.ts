import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks = [
    { path: 'hwc', label: 'HWC' },
    { path: 'compensation', label: 'Compensation' },
    { path: 'dailyCount', label: 'Daily Count' },
    { path: 'publicity', label: 'Publicity' },
  ];
}
