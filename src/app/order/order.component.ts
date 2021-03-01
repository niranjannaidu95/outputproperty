import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { Order } from '../order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

@Input() title:string;

@Input() order:Order;


@Output() emitter= new EventEmitter()
  
  constructor() { 
  }

  ngOnInit(): void {
  }

sendMessage(args:string){
  args+="Hello i am from child order"
  this.emitter.emit(args)
}
}
