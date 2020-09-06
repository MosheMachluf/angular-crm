import { Directive, HostListener } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Directive({
  selector: '[appLogin]',
})
export class LoginDirective {
  @HostListener('click', ['$event']) clickEvent(e: MouseEvent) {
    e.preventDefault();
    this.authService.loginWithEmail('admin@gmail.com', '123456');
  }

  constructor(private authService: AuthenticationService) {}
}
