import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Exadel lerning center';
  user = "guest"; // recruiter || tech-interviewer || mentor || manager || admin

  constructor() {

  }

  ngOnInit() {
  }

}
