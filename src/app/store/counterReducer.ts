import { createReducer, on } from '@ngrx/store';
import { ApiService } from '../api.service';
import { GetCountry} from './counter.actions';

export const initialState = 0;



function uniq(a) {
    return a.sort().filter(function (item, pos, ary) {
      return !pos || item != ary[pos - 1];
    });
  }

const _counterReducer = createReducer(initialState,
    on(GetCountry, state => {

       let country: object;
       let allArea = [];
       let countryList = [];
       let alfaBet = [];
       let countrySelect = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
   
      let ser:ApiService;
      

      ser.GetCountry().subscribe(co => {
       
        //  this.co=co;
          console.log(co);
            })
       // this.getAreaByScedule()
        //this.GetCountry()
    

        if (allArea.length != 0) {
            for (let index = 0; index < allArea.length; index++) {
              let element = JSON.parse(allArea[index]);
              let element1 = element[0].regionalBlocs[0].acronym;
              if (element1 == 'eu') {
                country = element;
                return 0;
              }
      
            };
          }
          var tempAz = [];
          var chr = [];
          fetch('https://restcountries.com/v2/regionalbloc/EU').then(
            respone => {
              respone.json().then(
                data => {
                  country = data;
                  allArea.push(JSON.stringify(data))
                  data.forEach(element => { chr.push(element.name); tempAz.push(element.name.charAt(0)) });
                  countryList = chr;
                  tempAz.sort();
                  alfaBet = uniq(tempAz);
                  //console.log(this.countryList);
                  //console.log(this.alfaBet);
                }
      
              );
      
      
            })

        

        return state = 5;

    }),





    // on(increment, state => {

    //     return state + 1

    // }),
    // on(reset, state => {

    //     return state = 7;

    // }),
    // on(decrement, state => {

    //     return state - 1;

    // }),


)



export function counterReducer(state, action) {
    return _counterReducer(state, action)
}

