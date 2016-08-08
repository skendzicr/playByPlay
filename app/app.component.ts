import { Component } from '@angular/core';
import { CustomersComponent } from './customer/customers.component' ;
import { HTTP_PROVIDERS } from "@angular/http";
import 'rxjs/Rx';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: "app.component.html",
    directives: [CustomersComponent],
    providers: [HTTP_PROVIDERS]
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
