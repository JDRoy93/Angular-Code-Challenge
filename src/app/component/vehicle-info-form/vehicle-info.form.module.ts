import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { VehicleInfoFormComponent } from './vehicle-info-form.component';
import { vehicleReducer } from 'src/app/state/reducers/vehichle-type.reducer';
import { EffectsModule } from '@ngrx/effects';
import { VehicleInfoEffects } from 'src/app/state/effects/vehicle-info.effects';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [VehicleInfoFormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    StoreModule.forFeature('vehicleInfo', vehicleReducer),
    EffectsModule.forFeature([VehicleInfoEffects]),
    ReactiveFormsModule
  ],
  providers: [],
  exports: [VehicleInfoFormComponent],
})
export class VehicleInfoModule {}
