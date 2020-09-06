import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/authentication/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public authService: AuthenticationService) {}

  @Output() toggleNavEvent = new EventEmitter();

  toggleNav(){
    this.toggleNavEvent.emit();
  }

  ngOnInit(): void {}
}
