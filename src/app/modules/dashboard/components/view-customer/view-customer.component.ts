import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss'],
})
export class ViewCustomerComponent implements OnInit {
  paramsObs: Observable<any> = null;

  constructor(
    private routeService: ActivatedRoute,
    private customerService: CustomersService
  ) {}

  ngOnInit(): void {
    this.paramsObs = this.routeService.params.pipe(
      switchMap((params) => this.customerService.getById(params.id))
    );
  }
}
