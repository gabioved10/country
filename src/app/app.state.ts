// src/app/app.state.ts

import { Country } from "./country";


export interface AppState {
  readonly country: Country[];
}