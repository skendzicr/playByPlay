import { Component } from '@angular/core';
import { CustomerComponent } from './customer/customer.component' ;

@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html",
    directives: [CustomerComponent]
})
export class AppComponent {

title: string="Customer app";
name: string ="Radovan";
radovanColor = "green";
customers = [
  {id:1, name:"Radovan"},
  {id:2, name:"Jelena"},
  {id:3, name:"Tara"},
  {id:4, name:"Vladimir"},
  {id:5, name:"Nenad"}
];

changeSuitColor()
  {
    this.radovanColor = this.radovanColor === "red" ? "green":"red";
  }
}
