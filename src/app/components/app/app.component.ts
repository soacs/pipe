import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This app is built using Angular 5';
  todaysDate: Date;
  cars: Array<string>;
  pi:number;
  e: number;
  amount: number;

  constructor(){
    this.cars = ["Audi", "Fiat", "Ford", "Volvo"];
    this.todaysDate = new Date();
    this.pi = 3.1415;
    this.e = 2.71828;
    this.amount = .34578;

    console.log("todaysDate: " + this.todaysDate);

  }
}

