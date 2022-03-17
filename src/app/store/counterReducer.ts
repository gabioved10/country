import { createReducer, on } from '@ngrx/store';
import {  decrement, GetAllCountry, increment, reset } from './counter.actions';

export const initialState = 0;
let v:any;



    
const _counterReducer = createReducer(initialState,
    on(GetAllCountry, state => {

        fetch('https://restcountries.com/v2/regionalbloc/EU').then(
    respone => {
        respone.json().then(data => {  state=data,console.log(data) });})
    
     return state=8;
    
    }),
    on(increment, state => {
    
        return state+1
       
       }),
       on(reset, state => {
    
        return state=7;
       
       }),
       on(decrement, state => {
    
        return state-1;
       
       }),
    
    
    )

export function counterReducer(state, action) {
    return _counterReducer(state, action)
}

