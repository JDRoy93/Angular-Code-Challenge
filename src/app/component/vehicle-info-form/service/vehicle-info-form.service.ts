import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehichleSubType, VehichleType } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private getVehicleTypeUrl = '../assets/vehicle-type.json';
  private getVehicleSubTypeUrl = '../assets/vehicle-sub-type.json';

  constructor(private http: HttpClient) {}

  getVehicleType(): Observable<VehichleType[]> {
    return this.http.get<VehichleType[]>(this.getVehicleTypeUrl);
  }

  getVehicleSubType(): Observable<VehichleSubType[]> {
    return this.http.get<VehichleSubType[]>(this.getVehicleSubTypeUrl);
  }
}
