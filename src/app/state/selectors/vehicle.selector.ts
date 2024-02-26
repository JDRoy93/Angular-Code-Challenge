import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VehicleTypeState } from '../reducers/vehichle-type.reducer';
import { selectors } from '../../shared/constant';

const getVehicleFeatureState =
  createFeatureSelector<VehicleTypeState>(selectors.VEHICLE_INFO_SELECTOR);

export const getInitialVehicleType = createSelector(
  getVehicleFeatureState,
  (state) => {
    return {
      ...state,
      vehicleType: state.vehicleType,
      vehicleSubType: [],
    };
  }
);

export const getInitialVehicleSubType = createSelector(
  getVehicleFeatureState,
  (state) => {
    return {
      ...state,
      vehicleSubType: state.vehicleSubType,
    };
  }
);
