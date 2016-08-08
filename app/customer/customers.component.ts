import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from './customer.component' ;

@Component({
  moduleId: module.id,
  selector: 'app-customers',
  templateUrl: 'customers.component.html',
  directives: [CustomerComponent]
})
export class CustomersComponent implements OnInit {
  customers = [
    {id:1, name:"Radovan"},
    {id:2, name:"Jelena"},
    {id:3, name:"Tara"},
    {id:4, name:"Vladimir"},
    {id:5, name:"Nenad"}
  ];
  constructor() {  }

  ngOnInit() {}
}
