import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { CustomersService } from 'src/app/modules/dashboard/services/customers.service';
import { CitiesService } from 'src/app/modules/dashboard/services/cities.service';
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss'],
})
export class NewCustomerComponent implements OnInit {
  cities = null;
  tempCities = null;

  constructor(
    private router: Router,
    private customerService: CustomersService,
    private citiesService: CitiesService,
    private toastr: ToastrService
  ) {}

  newCustomer: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  addNewCustomer({ value, valid }: { value: Customer; valid: boolean }): void {
    if (valid) {
      value.createdAt = Date.now();
      this.customerService.add(value);
      this.router.navigate(['/customers']);
      this.toastr.success(
        `${value.firstName} ${value.lastName} added`,
        'New customer added successfully!'
      );
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
      this.tempCities = await data;
    } catch (err) {
      console.log(err);
    }
  }

  searchAddress({ value }: { value: string }) {
    if (!value) return (this.cities = null);
    this.cities = this.tempCities.filter(
      (city) =>
        city.name.indexOf(value) > -1 ||
        city.english_name.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
        city.shem_napa.indexOf(value) > -1
    );
  }

  chooseCity(city) {
    this.newCustomer.address = `${city.english_name} - ${city.name} - ${city.shem_napa}`;
    this.cities = null;
  }

  ngOnInit(): void {
    this.israelCities();
  }
}
