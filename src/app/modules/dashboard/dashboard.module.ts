import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { UtilitiesModule } from '../utilities/utilities.module';
import { CustomersComponent } from './components/customers/customers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { QuillModule } from 'ngx-quill';

const exportations = [
  PageNotFoundComponent,
  ContactsComponent,
  CustomersComponent,
  NewCustomerComponent,
  DashboardComponent,
  ViewCustomerComponent,
  UpdateCustomerComponent,
];
@NgModule({
  declarations: [
    PageNotFoundComponent,
    ContactsComponent,
    CustomersComponent,
    NewCustomerComponent,
    DashboardComponent,
    ViewCustomerComponent,
    UpdateCustomerComponent,
  ],
  imports: [
    CommonModule,
    UtilitiesModule,
    NgxPaginationModule,
    FormsModule,
    AppRoutingModule,
    QuillModule,
    ReactiveFormsModule,
  ],
  exports: [...exportations],
})
export class DashboardModule {}
