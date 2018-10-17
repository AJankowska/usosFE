import { Component, OnInit } from '@angular/core';
import { Notatka } from '../../interfaces/notatka';
import { FserviceService } from '../../services/fservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notatka',
  templateUrl: './notatka.component.html',
  styleUrls: ['./notatka.component.css']
})
export class NotatkaComponent implements OnInit {
notatkaW:boolean=false;
  subjectId: string;
  subject;
category
  constructor(private _route: ActivatedRoute,
    private _router: Router,private _service:FserviceService) { }
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
    let note:Notatka={
      kiedy: new Date(),
      description:notatka
    }
    if(this.notatkaW) this.category = "wNotatki";
    else (this.subject.laborki)? this.category="labNotatki": this.subject.cwiczenia? this.category="cwNotatki":this.category="pNotatki";
    console.log('dupa1 ' + this.category);
    this._service.add(note,this.category);
    window.history.go(-1);
  }
}
