import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { LoginComponent } from './components/login/login.component';

const exportations = [LoginComponent];
@NgModule({
  declarations: [...exportations],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
  ],
  exports: [...exportations],
})
export class AuthenticationModule {}
