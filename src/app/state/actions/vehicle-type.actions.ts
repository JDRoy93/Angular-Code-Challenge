import { createAction, props } from '@ngrx/store';
import { VehichleSubType, VehichleType } from 'src/app/models';

export const initializeVehicleType = createAction(
  '[Vehicle Type] Initialize Vehicle Type List'
);

export const loadVehicleTypeSuccess = createAction(
  '[Vehicle Type] Load Vehicle Type List',
  props<{ vehicleType: VehichleType[] }>()
);

export const loadVehicleTypeFailure = createAction(
  '[Vehicle Type] Load Vehicle Type List Fail',
  props<{ error: string }>()
);

export const loadVehicleSubTypeSuccess = createAction(
  '[Vehicle Sub Type] Load Vehicle Sub Type List',
  props<{ vehicleSubType: VehichleSubType[] }>()
);

export const loadVehicleSubTypeFailure = createAction(
  '[Vehicle Sub Type] Load Vehicle Sub Type List Fail',
  props<{ error: string  }>()
);


export const loadVehicleType = createAction(
  '[Vehicle Type] Load'
);

export const loadVehicleSubType = createAction(
  '[Vehicle Sub Type] Load'
);