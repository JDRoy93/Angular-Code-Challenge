import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { VehicleInfoModule } from './component/vehicle-info-form/vehicle-info.form.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    ReactiveFormsModule,
    VehicleInfoModule,
    HttpClientModule,
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
