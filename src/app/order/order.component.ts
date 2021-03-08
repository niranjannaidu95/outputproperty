import { Component,EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit,OnChanges,OnDestroy {

@Input() title:string;

@Input() order:Order;

@Output() emitter = new EventEmitter()
  
  constructor() { 
  }
  ngOnInit(): void {
    console.log(this.emitter)
  }
  ngOnChanges(): void {
console.log(this.emitter)  }

  ngOnDestroy(): void {
console.log(this.emitter)  }

sendData(){
  var args="hello i am child order"
 this.emitter.emit(args)
}
}
