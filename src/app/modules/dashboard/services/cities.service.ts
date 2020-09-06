import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  cities: any = null;
  readonly endPoint = 'assets/data/israel-cities.json';

  constructor(private http: HttpClient) {}

  getCities() {
    return (this.cities = this.http.get(this.endPoint).toPromise());
  }
}
