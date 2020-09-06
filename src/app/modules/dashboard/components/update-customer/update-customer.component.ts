import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomersService } from 'src/app/modules/dashboard/services/customers.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { switchMap, take } from 'rxjs/operators';
import { Customer } from '../../interfaces/customer';
import { CitiesService } from '../../services/cities.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss'],
})
export class UpdateCustomerComponent implements OnInit {
  private _subscription: Subscription = null;
  cities;

  editCustomer: Customer = {
    firstName: 'Loading...',
    lastName: 'Loading...',
    email: 'Loading...',
    phone: 'Loading...',
    address: 'Loading...',
    notes: 'Loading...',
  };

  constructor(
    private routeService: ActivatedRoute,
    private router: Router,
    private customerService: CustomersService,
    private citiesService: CitiesService
  ) {}

  async updateCustomer({ value, valid }: { value: Customer; valid: boolean }) {
    if (valid) {
      await this.customerService.update(this.editCustomer.id, value);
      this.router.navigate(['/customers']);
    }
  }

  resetForm(form: NgForm) {
    form.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      notes: '',
    });
  }

  async israelCities() {
    try {
      let data = await this.citiesService.getCities();
      this.cities = await data;
    } catch (err) {
      console.log(err);
    }
  }

  ngOnInit(): void {
    this._subscription = this.routeService.params
      .pipe(
        switchMap((params) => this.customerService.getById(params.id)),
        take(1)
      )
      .subscribe((customer) => (this.editCustomer = customer));

    this.israelCities();
  }
}
