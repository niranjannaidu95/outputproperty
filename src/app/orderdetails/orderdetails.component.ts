import { Component, OnChanges,EventEmitter, OnDestroy, OnInit,Input,Output, SimpleChanges } from '@angular/core';
import { Orders } from '../orders';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss']
})
export class OrderdetailsComponent implements OnInit,OnChanges, OnDestroy {


  @Input() title:string;

@Input() orders:Orders;

@Output() emitter = new EventEmitter()

constructor() { }
  ngOnInit(): void {
    console.log(this.orders)  
  }
  
ngOnChanges(): void {
  console.log(this.orders)  }
  
    ngOnDestroy(): void {
  console.log(this.orders)  }

sendData(){
  var args="hello i am child order"
 this.emitter.emit(args)
}
}

