

import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GetCountry } from '../store/counter.actions';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  country: object;
  searchValue: string
  countrySelected: number = null;
  allArea = [];
  countryList = [];
  countryListFilter = []
  alfaBet = [];
  countrySelect = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];




  constructor(private store: Store<{ cuntry: any }>, private ser: ApiService) {
    // this.count$ = store.select('count1')
  }

  
  ngOnInit(): void {
    this.getAreaByScedule()
  }

  GetCountry() {
    this.store.dispatch(GetCountry());
  }

  async getAreaByScedule() {

    let x = 0
    while (1 == 1) {
      let randomElement = this.countrySelect[Math.floor(Math.random() * this.countrySelect.length)];
      this.getAreaBySelection(randomElement);
      await this.sleep(15000);
      x++;
    }
  }


  getAreaBySelection(area) {

    if (this.allArea.length != 0) {
      for (let index = 0; index < this.allArea.length; index++) {
        let element = JSON.parse(this.allArea[index]);
        let element1 = element[0].regionalBlocs[0].acronym;
        if (element1 == area) {
          this.country = element;

          return 0;
        }

      };
    }
    var tempAz = [];
    var chr = [];
    fetch('https://restcountries.com/v2/regionalbloc/' + area).then(
      respone => {
        respone.json().then(
          data => {
            this.country = data;
            this.countrySelected = null;
            this.countryListFilter = null;
            this.allArea.push(JSON.stringify(data))
            data.forEach(element => { chr.push(element.name); tempAz.push(element.name.charAt(0)) });
            this.countryList = chr;
            tempAz.sort();
            this.alfaBet = this.uniq(tempAz);
          }
        );
      })
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  uniq(a) {
    return a.sort().filter(function (item, pos, ary) {
      return !pos || item != ary[pos - 1];
    });
  }

  select(c) {
    this.countrySelected = null;
    this.countryListFilter = this.countryList.filter(cc => cc[0] == c);
  }
  selectCountry(cou) {
    var size = 0, key;
    for (key in this.country) {
      if (this.country[size].name == cou) {
        this.countrySelected = size;
      };
      size++;
    }
  }

  searchFunctin() {
    var size = 0, key;
    for (key in this.country) {
      if (this.country[size].name == this.searchValue) {
        this.countryListFilter = this.countryList.filter(cc => cc == this.searchValue);
        this.countrySelected = size;
      }
      size++;
    }
    this.searchValue = "";
  }

}


