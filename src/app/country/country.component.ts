

import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset,GetAllCountry } from '../store/counter.actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  count$: Observable<any>;
  country:object;
  ALLcountry=[];
  countryList=[];
  alfaBet=[];
  countrySelect=['EU','EFTA','CARICOM','PA','AU','USAN','EEU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  counterSelect:number=0;



  constructor(private store:Store<{count1: any}>) { 
    this.count$ = store.select('count1')
  }

  
  GetAllCountry(){
        this.store.dispatch(GetAllCountry());
              }

  // getFirstCountryLocal(Cuntry:string){
  //   var chr=[];
  //   var tempAz=[];
  //   var allcountry=[];
  //   fetch('https://restcountries.com/v2/regionalbloc/'+Cuntry).then(
  //     respone => {
  //         respone.json().then(
  //           data => { this.country = data;
  //             this.ALLcountry.push(JSON.stringify(data))
  //             data.forEach(element => {chr.push(element.name);tempAz.push(element.name.charAt(0))});
  //             this.countryList = chr;
  //             tempAz.sort();
  //             //chrAz =this.uniq(chrAz);
  //             this.alfaBet =this.uniq(tempAz);
  //             this.counterSelect++;
  //             console.log(this.countryList);
  //             console.log(this.alfaBet);
  //             console.log(data);
              
              
              

  //           }
            
  //           );
            
          
          
  //         })
  // }


  // getCountryByRandom(){
  //   do {
  //   const randomElement = this.countrySelect[Math.floor(Math.random() * this.countrySelect.length)];
  //   this.country = this.ALLcountry[randomElement]
  //   }
  //   while (true);


  // }

   


 async getCountryByScedule(){


  //const randomElement = this.countrySelect[Math.floor(Math.random() * this.countrySelect.length)];

  
  
//  let i = 0;
  // while (i<15) {
  //   let k = i;
  //   //let CS = this.countrySelect;
  //   console.log(i);


let x = 0
  while(1==1){
    let randomElement = this.countrySelect[Math.floor(Math.random() * this.countrySelect.length)];
    
  //   //const sleep = ms => new Promise(r => setTimeout(r, 2000));
    this.getCountryBySelection(randomElement);
    await this.sleep(2000);
    x++;


  }
   
   
    
  //   setTimeout(()=>{
      
  //     this.getCountryBySelection(randomElement);
  //   }, 1000 * (k + 1)); 
  //     i++; 
  //   }
  



  //   for(var i = 0;i < this.countrySelect.length; i++){
  //     let k = i;
  //     //let CS = this.countrySelect;
  //     console.log(i);
  //     let randomElement = this.countrySelect[Math.floor(Math.random() * this.countrySelect.length)];
      
  //     setTimeout(()=>{
  //       this.getCountryBySelection(randomElement);
  //     }, 1000 * (k + 1)); 
    
  // }

 
 
      
                
  }



  getCountryBySelection(contry){

    if(this.ALLcountry.length !=0){
    for (let index = 0; index < this.ALLcountry.length; index++) {
      let element = JSON.parse(this.ALLcountry[index]);
      let element1 = element[0].regionalBlocs[0].acronym ;
       if(element1 == contry){
         this.country =element; 
          return 0;
      
    
      }
      
    };}

   
    var tempAz=[];
    var chr=[];
    
    fetch('https://restcountries.com/v2/regionalbloc/'+contry).then(
      respone => {
          respone.json().then(
            data => { this.country = data;
              this.ALLcountry.push(JSON.stringify(data))
              data.forEach(element => {chr.push(element.name);tempAz.push(element.name.charAt(0))});
              this.countryList = chr;
              tempAz.sort();
              //chrAz =this.uniq(chrAz);
              this.alfaBet =this.uniq(tempAz);
              this.counterSelect++;
              console.log(this.countryList);
              console.log(this.alfaBet);
              //console.log(this.ALLcountry[5]);
             
                          
            }
            
            );
            
          
          
          })

  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

  // increment(){
  // this.store.dispatch(increment());
  // }
  // decrement(){
  //   this.store.dispatch(decrement());

  // }

  // reset(){
  //   this.store.dispatch(reset());

  // }

  

   uniq(a) {
    return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
}
