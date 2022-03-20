

import { Action } from '@ngrx/store';
import { Country } from '../country';

export const ADD_COUNTRY = 'ADD_COUNTRY';

export function addCountryReducer(state: Country[] = [], action) {
    switch (action.type) {
        case ADD_COUNTRY:
            return [...state, action.payload];
        default:
            return state;
    }
}

