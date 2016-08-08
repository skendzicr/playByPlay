import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html"
})
export class AppComponent {

title: string="Customer app";
name: string ="Radovan";
radovanColor = "yellow";

changeSuitColor()
  {
    this.radovanColor = this.radovanColor === "red" ? "yellow":"red";
  }
}
