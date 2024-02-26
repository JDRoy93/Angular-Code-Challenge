import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { VehicleService } from '../../component/vehicle-info-form/service/vehicle-info-form.service';
import { catchError, map, mergeMap, of, shareReplay } from 'rxjs';
import { VehicleTypeAction } from '../actions';
@Injectable()
export class VehicleInfoEffects {
  constructor(
    private actions$: Actions,
    private vehicleService: VehicleService
  ) {}

  loadVehicleType$ = createEffect(() => {
    return this.actions$.pipe(
      shareReplay(1),
      ofType(VehicleTypeAction.loadVehicleType),
      mergeMap(() =>
        this.vehicleService.getVehicleType().pipe(
          map((res) =>
            VehicleTypeAction.loadVehicleTypeSuccess({ vehicleType: res })
          ),
          catchError(error => of(VehicleTypeAction.loadVehicleTypeFailure({  error })))
        )
      )
    );
  });

  loadVehicleSubType$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VehicleTypeAction.loadVehicleSubType),
      mergeMap(() =>
        this.vehicleService.getVehicleSubType().pipe(
          map((res) =>
            VehicleTypeAction.loadVehicleSubTypeSuccess({ vehicleSubType: res })
          ),
          catchError(error => of(VehicleTypeAction.loadVehicleSubTypeFailure({ error })))
        )
      )
    );
  });
}
