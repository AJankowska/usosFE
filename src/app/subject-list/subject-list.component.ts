import { Component, OnInit } from '@angular/core';
import { FserviceService } from '../services/fservice.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
source:Array<any>;
ECTS;
  constructor(private _service:FserviceService) { }

  ngOnInit() {
    this._service.APIgetSource();
    this._service.getSource().subscribe(a=>this.source=a);
    this._service.APIgetECTS();
    this._service.getECTS().subscribe(a=>{this.ECTS=a});
    
  }
  

}
