import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:any;
  @Output() EventAdd=new EventEmitter();
  quantity:number=0;
  addButton:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.EventAdd.emit({item:this.product,quantity:this.quantity});
  }

}
