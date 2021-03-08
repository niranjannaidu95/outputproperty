import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss']
})
export class OrderdetailsComponent implements OnInit,OnChanges, OnDestroy {

  constructor() { }
 

  public title:string="this is coming from parent";

order:Order ={
  name:'niranjan',
  id:7,
  description:'from Bangalore'
}

  ngOnInit(): void {
    console.log(this.order)
  }
  ngOnChanges(): void {
console.log(this.order)  }

  ngOnDestroy(): void {
console.log(this.order)  }
 

  onEventReceivedFromOrder(data:any){
console.log(data)
}

}
