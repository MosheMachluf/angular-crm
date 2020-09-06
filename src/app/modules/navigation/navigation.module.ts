import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginDirective } from '../authentication/directives/login.directive';
import { LogoutDirective } from '../authentication/directives/logout.directive';
import { LoginGoogleDirective } from '../authentication/directives/login-google.directive';
import { FormsModule } from '@angular/forms';

const exportations = [NavbarComponent, SidenavComponent];
@NgModule({
  declarations: [
    NavbarComponent,
    SidenavComponent,
    LoginDirective,
    LogoutDirective,
    LoginGoogleDirective,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule],
  exports: [...exportations],
})
export class NavigationModule {}
