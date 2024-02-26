import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  getInitialVehicleSubType,
  getInitialVehicleType,
} from '../../state/selectors/vehicle.selector';
import { Observable } from 'rxjs';
import { VehicleTypeAction } from 'src/app/state/actions';
import { VehichleSubType, VehichleType } from 'src/app/models';
import {
  ERROR_MESSAGE,
  defaultCarImage,
  defaultType,
} from '../../shared/constant';
import { formatLicenceNumber } from '../../shared/util/util';
import { KentekenCheck } from 'rdw-kenteken-check';

@Component({
  selector: 'app-vehicle-info-form',
  templateUrl: './vehicle-info-form.component.html',
  styleUrls: ['./vehicle-info-form.component.css'],
})
export class VehicleInfoFormComponent implements OnInit {
  vehicleInfoForm: any;
  vehicleTypeInfo$!: Observable<any>;
  vehicleSubTypeInfo$!: Observable<any>;
  vehicleImageUrl = defaultCarImage;
  vehicleSubTypes: VehichleSubType[] = [];
  isLicenceValid = true;
  invalidLicenceMessage = ERROR_MESSAGE.INVALID_lICENCE;
  constructor(private fb: FormBuilder, private store: Store<any>) {}

  ngOnInit(): void {
    this.vehicleInfoForm = this.fb.group({
      vehicleType: [''],
      vehicleSubType: [''],
      licenseNumber: [''],
    });
    this.vehicleTypeInfo$ = this.store.select(getInitialVehicleType);
    this.vehicleSubTypeInfo$ = this.store.select(getInitialVehicleSubType);
    this.loadVehicleType();
    this.vehicleInfoForm
      .get('vehicleType')
      .valueChanges.subscribe((type: string) => {
        this.vehicleTypeInfo$ = this.store.select(getInitialVehicleType);
        this.vehicleTypeInfo$.subscribe((data) => {
          this.vehicleImageUrl = data?.vehicleType?.find(
            (val: VehichleType) =>
              val.typeName?.toUpperCase() === type.toUpperCase()
          )?.imageUrl;
        });
        this.loadSubType(type);
      });
    this.vehicleInfoForm.patchValue({ vehicleType: defaultType });
  }

  onSubmit() {
    console.log(this.vehicleInfoForm);
  }

  loadVehicleType(): void {
    this.store.dispatch(VehicleTypeAction.loadVehicleType());
  }

  loadSubType(type: string): void {
    this.store.dispatch(VehicleTypeAction.loadVehicleSubType());
    this.vehicleSubTypeInfo$.subscribe((data) => {
      this.vehicleSubTypes = data.vehicleSubType?.filter(
        (subType: VehichleSubType) =>
          subType.typeName?.toUpperCase() === type?.toUpperCase()
      );
    });
  }

  checkValidity(): void {
    if (this.vehicleInfoForm.value.licenseNumber?.trim()) {
      const kt = new KentekenCheck(this.vehicleInfoForm.value.licenseNumber);
      kt.formatLicense();
      this.isLicenceValid = kt.valid;
    }
  }

  formatLicence(): void {
    if (this.vehicleInfoForm.value.licenseNumber?.trim()) {
      const formattedNumber = formatLicenceNumber(
        this.vehicleInfoForm.value.licenseNumber?.toUpperCase()
      ) as string;
      this.vehicleInfoForm.patchValue({
        licenseNumber: formattedNumber,
      });
    }
  }
}
