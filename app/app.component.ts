import { Component } from '@angular/core';
import { CustomersComponent } from './customer/customers.component' ;

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: "app.component.html",
    directives: [CustomersComponent]
})
export class AppComponent {

title: string="Customer app";
name: string ="Radovan";
radovanColor = "green";

changeSuitColor()
  {
    this.radovanColor = this.radovanColor === "red" ? "green":"red";
  }
}
