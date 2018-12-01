import { Component, OnInit } from '@angular/core';
import { FserviceService } from '../../services/fservice.service';

@Component({
  selector: 'app-wyklad',
  templateUrl: './wyklad.component.html',
  styleUrls: ['./wyklad.component.css']
})
export class WykladComponent implements OnInit {
number:number;item;
zal:boolean | null;
kiedy:Date;
notatka:string;
  constructor(private _service: FserviceService) { }

  ngOnInit() {
    this.number=this._service.getEditableNumber()
    this._service.getEditable().subscribe(a=>{
    this.item=a;
    console.log(this.item);
    console.log(this.number);
    /*this.zal=JSON.parse(this.item[this.number].zaliczony);
    this.kiedy=this.item[this.number].kiedy;
    this.notatka=this.item[this.number].notatka;*/
    })
  }
  edit(){
    let itemChange={
      notatka : this.notatka,
      kiedy : this.item[this.number].kiedy,
      zaliczony: this.zal

    }
    this.item[this.number] = itemChange;
    this._service.edit(this.item);
    window.history.go(-1);
  }
  back(){
    window.history.go(-1);
  }
  
}
