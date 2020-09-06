import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../../interfaces/customer';
import { Subscription, Observable } from 'rxjs';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public countCustomers: number;
  public countContacts: number;
  customers: Observable<Customer[]>;

  constructor(
    private customersService: CustomersService,
    private contactsService: ContactsService
  ) {
    this.customers = this.customersService.getAll();

    this.customers.subscribe((customers: Customer[]) => {
      this.countCustomers = customers.length;
    });

    this.countContacts = this.contactsService.countContacts();
  }

  ngOnInit(): void {}
}
