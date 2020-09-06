import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/authentication/components/login/login.component';
import { AuthGuard } from './modules/authentication/guards/auth.guard';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { ContactsComponent } from './modules/dashboard/components/contacts/contacts.component';
import { CustomersComponent } from './modules/dashboard/components/customers/customers.component';
import { NewCustomerComponent } from './modules/dashboard/components/new-customer/new-customer.component';
import { ViewCustomerComponent } from './modules/dashboard/components/view-customer/view-customer.component';
import { UpdateCustomerComponent } from './modules/dashboard/components/update-customer/update-customer.component';
import { PageNotFoundComponent } from './modules/dashboard/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  {
    canActivate: [AuthGuard],
    path: 'dashboard',
    component: DashboardComponent,
  },
  { canActivate: [AuthGuard], path: 'contacts', component: ContactsComponent },
  {
    canActivate: [AuthGuard],
    path: 'customers',
    component: CustomersComponent,
  },
  {
    canActivate: [AuthGuard],
    path: 'customers/add',
    component: NewCustomerComponent,
  },
  {
    canActivate: [AuthGuard],
    path: 'customers/:id',
    component: ViewCustomerComponent,
  },
  {
    canActivate: [AuthGuard],
    path: 'customers/:id/edit',
    component: UpdateCustomerComponent,
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full',
  },
];

// {
//   path: 'customers',
//   component: CustomersComponent,
//   children: [
//     { path: 'add', component: NewCustomerComponent },
//     { path: ':id', component: ViewCustomerComponent },
//     { path: ':id/edit', component: ViewCustomerComponent },
//   ],
// },

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
