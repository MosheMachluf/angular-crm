import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Directive({
  selector: '[appLoginGoogle]',
})
export class LoginGoogleDirective {
  @HostListener('click', ['$event']) async clickEvent(e: MouseEvent) {
    e.preventDefault();
    await this.authService.loginWithGoogle();
    this.router.navigate(['/']);
  }

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
}
