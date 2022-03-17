// import { Component, OnInit } from '@angular/core';
// import { Store, select } from '@ngrx/store';
// import { increment, decrement, reset } from '../store/counter.actions';
// import { Observable } from 'rxjs';


// @Component({
//   selector: 'app-counter',
//   templateUrl: './counter.component.html',
//   styleUrls: ['./counter.component.css']
// })
// export class CounterComponent implements OnInit {

//     count1$: Observable<any>;

//   constructor(private store:Store<{count: number}>) { 
//     this.count1$ = store.select('count')
//   }

  

//   increment(){
//   this.store.dispatch(increment());
//   }
//   decrement(){
//     this.store.dispatch(decrement());

//   }

//   reset(){
//     this.store.dispatch(reset());

//   }

//   ngOnInit(): void {
//   }

// }
