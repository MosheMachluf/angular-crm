import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/authentication/services/authentication.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = {
    email: '',
    password: '',
  };
  errorMsg: string = null;

  constructor(
    public authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async onLogin(form: NgForm) {
    if (form.valid) {
      try {
        await this.authService.loginWithEmail(
          this.form.email,
          this.form.password
        );
        this.router.navigate(['/']);
      } catch {
        this.errorMsg = 'Email or Password is incorrcet!';
      }
    }
  }
}
