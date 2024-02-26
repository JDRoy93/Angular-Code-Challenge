import { createReducer, on } from '@ngrx/store';
import { VehichleSubType, VehichleType } from 'src/app/models';
import { VehicleTypeAction } from '../actions';

export interface VehicleTypeState {
  vehicleType: VehichleType[];
  vehicleSubType: VehichleSubType[],
  error: string
}
const initialState: VehicleTypeState = {
  vehicleType: [],
  vehicleSubType: [],
  error:''
};


export const vehicleReducer = createReducer<VehicleTypeState>(
  initialState,
  on(VehicleTypeAction.initializeVehicleType, (state): VehicleTypeState => {
    return {
      ...state,
    };
  }),
  on(
    VehicleTypeAction.loadVehicleTypeSuccess,
    (state, action): VehicleTypeState => {
      return {
        ...state,
        vehicleType: action.vehicleType,
      };
    }
  ),
  on(
    VehicleTypeAction.loadVehicleSubTypeSuccess,
    (state, action): VehicleTypeState => {
      return {
        ...state,
        vehicleSubType: action.vehicleSubType,
      };
    }
  ),
  on(
    VehicleTypeAction.loadVehicleTypeFailure,
    (state, action): VehicleTypeState => {
      return {
        ...state,
        vehicleType: [],
        error: action.error
      };
    }
  ),
  on(
    VehicleTypeAction.loadVehicleSubTypeFailure,
    (state, action): VehicleTypeState => {
      return {
        ...state,
        vehicleSubType: [],
        error: action.error
        
      };
    }
  )
);
