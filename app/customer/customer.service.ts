import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

    getCustomers()
    {
      return [
        {id:1, name:"Radovan"},
        {id:2, name:"Jelena"},
        {id:3, name:"Tara"},
        {id:4, name:"Vladimir"},
        {id:5, name:"Nenad"}
      ];
    }
  constructor() {  }
}
