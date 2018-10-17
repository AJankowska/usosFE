import { Component, OnInit } from '@angular/core';
import { FserviceService } from '../../services/fservice.service';
import { Kolokwium } from '../../interfaces/Kolokwium';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wyklad',
  templateUrl: './wyklad.component.html',
  styleUrls: ['./wyklad.component.css']
})
export class WykladComponent implements OnInit {
 co:string;
 kiedy:Date;
  subject
  subjectId: string;

  constructor(private _route: ActivatedRoute,
    private _router: Router, private _service:FserviceService) { }
    back(){
      history.back();
    }
  ngOnInit() {
    let id = this._route.snapshot.paramMap.get('_id');
    this.subjectId = id;
    this._service.APIgetSubject(this.subjectId);
    this._service.getSubject().subscribe(a=>this.subject=a);
  }
  add(notatka:string){
    let note;
    if(this.subject.wyklad[0].co){
       note={
        co:this.co,
        kiedy:this.kiedy,
        zaliczone:null,
        notatka:notatka
      }
    }
    else note={
      kiedy:this.kiedy,
      zaliczone:null,
      notatka:notatka
    }
    
    this._service.add(note,'wyklad');
    window.history.go(-1);
  }
}
