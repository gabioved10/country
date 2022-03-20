import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { addCountryReducer } from './store/counterReducer';
import { CountryComponent } from './country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    // CounterComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    StoreModule.forRoot({ country: addCountryReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
