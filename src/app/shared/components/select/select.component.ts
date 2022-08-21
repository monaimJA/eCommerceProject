import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() categories:any;
  @Input() Loading:any;
  @Input() all:boolean=true;
  @Input() select="";
  @Output() filter=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  filterProducts($event:any){
    this.filter.emit($event);
  }

}
