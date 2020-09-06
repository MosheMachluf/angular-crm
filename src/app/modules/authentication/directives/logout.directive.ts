import { Directive, HostListener } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[appLogout]',
})
export class LogoutDirective {
  @HostListener('click', ['$event']) async clickEvent(e: MouseEvent) {
    e.preventDefault();
    await this.authService.logout();
    this.router.navigate(['/login']);
  }

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
}
