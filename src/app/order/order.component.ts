import { Component,OnInit } from '@angular/core';
import { Orders } from '../orders';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {


  public title:string="this is coming from parent";

orders:Orders ={
  name:'niranjan',
  id:7,
  description:'from Bangalore'
}

  ngOnInit(): void {
    console.log(this.orders)
  }
  
 

  onEventReceivedFromOrder(data:any){
console.log(data)
}
}
