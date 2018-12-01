import { Component, OnInit } from '@angular/core';
import { FserviceService } from '../../services/fservice.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-notatka',
  templateUrl: './notatka.component.html',
  styleUrls: ['./notatka.component.css']
})
export class NotatkaComponent implements OnInit {
 item:object;
 number;
  toczenie:boolean = true;

  constructor(private _service : FserviceService, private _active:ActivatedRoute) {
   
   }

   
  ngOnInit() {

    console.log(' co pobieramy ?');
    this.number=this._service.getEditableNumber();
    this._service.getEditable().subscribe(a=>{
      //if (a.length > 0) {
        this.item=a;
        console.log('tablice => ' + this.item);
        this.notatka = this.item[this.number].description;
        this.toczenie = false;
      //}
    
    //this.notatka = this.item[this.number].description;
    //this.toczenie = false;
    //console.log(this.item);
    //console.log(this.number);
    //this.notatka = this.item[this.number].description
 
    });
  
  
   // this._service.getSubject().subscribe(a => this.item = a);
   
    //zrobić odniesienie do BE po już przefiltrowane te dane co niosiu potrzebujesz
    //zrobić logikę robiącą zaliczenie przedmiotu
  }
  notatka:string;

  edit(){
    console.log(this.notatka);
    let itemChange={
      description : this.notatka,
      kiedy : new Date().toString().slice(3,15)
    }
    this.item[this.number] = itemChange;
    this._service.edit(this.item);
    window.history.go(-1);
  }
  back(){
    window.history.go(-1);
  }
  

}
