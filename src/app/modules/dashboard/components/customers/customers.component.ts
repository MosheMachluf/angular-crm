import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/modules/dashboard/services/customers.service';
import { Observable, Subscription } from 'rxjs';
import { Customer } from '../../interfaces/customer';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers: Observable<Customer[]> = null;

  searchPhone: string = '';
  searchLastName: string = '';
  searchFirstName: string = '';

  p: number;
  amountCustomer: number = 5;

  countCustomers: any;

  constructor(
    private customersService: CustomersService,
    private toastr: ToastrService
  ) {
    this.customers = this.customersService.getAll();
  }

  removeCustomer(id: string) {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customersService.delete(id);
      this.toastr.error(`Customer deleted`);
    }
  }

  changeAmountCustomers({ target }) {
    this.amountCustomer = target.value;
  }

  ngOnInit(): void {}
}
