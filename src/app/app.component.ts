import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from './modules/authentication/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Royal-CRM';
  toggleNavOpen: boolean = false;

  constructor(public authService: AuthenticationService) {}

  handleNav() {
    this.toggleNavOpen = !this.toggleNavOpen;
  }

  ngOnInit(): void {}
}
