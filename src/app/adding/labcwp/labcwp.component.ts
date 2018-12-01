import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FserviceService } from '../../services/fservice.service';

@Component({
  selector: 'app-labcwp',
  templateUrl: './labcwp.component.html',
  styleUrls: ['./labcwp.component.css']
})
export class LabcwpComponent implements OnInit {
  subjectId: string;
  subject;
  co:string;
  kiedy:Date;
  wejsciowka:Boolean|null;
  sprawko:Boolean|null;
category:string;
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
    let note
    if(this.subject.wejsciowka)
    {this.category="laborki"
      note={
       co:this.co,
       kiedy:this.kiedy.toString(),
        wejsciowka:this.wejsciowka,
        sprawko:this.sprawko,
        zaliczone:null,
        notatka:notatka
     }
     }
   else if(this.subject.zaliczone)
   { this.category="cwiczenia"
   note={
     co:this.co,
      kiedy:this.kiedy.toString(),
     zaliczone:null,
      notatka:notatka
     }
   }
  else {this.category="projekt"
   note={
      co:this.co,
      kiedy:this.kiedy.toString()
      }
    };

    this._service.add(note,this.category);
    //window.history.go(-1);
  }
}
