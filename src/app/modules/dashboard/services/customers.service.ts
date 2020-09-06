import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Customer } from '../interfaces/customer';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customerRef: AngularFirestoreCollection<Customer> = null;
  customer$: Observable<Customer[]>;
  countCustomers: number;

  constructor(private afs: AngularFirestore) {
    this.customerRef = this.afs.collection('customers', (ref) =>
      ref.orderBy('createdAt', 'asc')
    );
    this.customerRef = this.afs.collection('customers');

    this.customer$ = this.customerRef
      .valueChanges({ idField: 'id' })
      .pipe(shareReplay(1));
  }

  getAll() {
    return this.customer$;
  }

  getById(id: string): Observable<Customer> {
    // return this.customerRef.doc(id).valueChanges();
    return this.customerRef
      .doc<Customer>(id)
      .valueChanges()
      .pipe(
        map((doc) => {
          if (doc) return { id, ...doc };
          return null;
        })
      );
  }

  add(customer: Customer) {
    return this.customerRef.add(customer);
  }

  update(id: string, customer: Customer) {
    return this.customerRef.doc(id).update(customer);
  }

  delete(id: string) {
    this.customerRef.doc(id).delete();
  }
}
