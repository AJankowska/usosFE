import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FserviceService } from '../services/fservice.service';

@Component({
  selector: 'app-singlesubject',
  templateUrl: './singlesubject.component.html',
  styleUrls: ['./singlesubject.component.css']
})
export class SinglesubjectComponent implements OnInit {
subjectId:string;
subject;
trash_laborki:boolean=false;
trash_labNotes:boolean=false;
trash_wyklad:boolean=false;
trash_wykNotes:boolean=false;
  globalCategory: any;
  miniCategory: any;
  constructor( private _route: ActivatedRoute,
    private router: Router, private _service:FserviceService) { }

  ngOnInit() {
    let id = this._route.snapshot.paramMap.get('_id');
    this.subjectId = id;
    this._service.APIgetSubject(this.subjectId);
    this._service.getSubject().subscribe(a=>this.subject=a);
  }
  
  deleteItem(kategoria:string,i:number){
   kategoria=="laborki"||kategoria=="projekt"||kategoria=="cwiczenia"?this.trash_laborki=false:kategoria=="wyklad"?this.trash_wyklad=false:kategoria=="wNotatki"? this.trash_wykNotes=false:this.trash_labNotes=false;
    this._service.deleteItem(kategoria,this.subject[kategoria][i]);
   

  }
  /*
  showAddingNote(c?:string){
    let kategoria;
    
     if(c) kategoria='w';
      else this.subject.laborki?kategoria="lab":this.subject.cwiczenia?kategoria="cw":kategoria="p";
    this.globalCategory=kategoria;
      // kategoria=="lab"?this.addingNote=true:kategoria=="cw"?this.addingNoteCw=true:kategoria=="p"?this.addingNoteP==true:this.addingNoteW=true;
      let body = document.getElementById('body');
      let divAdding = document.getElementById(this.globalCategory+'AddingNote');
      body.setAttribute('class','second-view');
      divAdding.setAttribute('class','first-view');
  }

  addToLabNotes(notka:string){
  
    this._service.addToNotes(notka,this.globalCategory);
    let body = document.getElementById('body');
    let divAdding = document.getElementById(this.globalCategory+'AddingNote');
    divAdding.setAttribute('class','second-view');
    body.setAttribute('class','first-view');  
  }
  
  exitAddToLabNotes(){
    
    let body = document.getElementById('body');
    let divAdding = document.getElementById(this.globalCategory+'AddingNote');
    divAdding.setAttribute('class','second-view');
    body.setAttribute('class','first-view');
  } 
  showAdding(c?:string){
    let kategoria;
    let kategoria2='w'
    if(c!=="w")this.subject.laborki?kategoria2="lab":this.subject.cwiczenia?kategoria2="cw":kategoria2="p";
     else if(c=='w') this.subject.wyklad[0].co?kategoria="W":kategoria="E";
    console.log(kategoria +" i "+kategoria2);
    this.miniCategory = kategoria;
    this.globalCategory=kategoria2;
      // kategoria=="lab"?this.addingNote=true:kategoria=="cw"?this.addingNoteCw=true:kategoria=="p"?this.addingNoteP==true:this.addingNoteW=true;
      let body = document.getElementById('body');
      let divAdding
      if(c=="w"){ divAdding = document.getElementById(this.globalCategory+'Adding'+this.miniCategory);}
      else { divAdding = document.getElementById(this.globalCategory+'Adding');}
      body.setAttribute('class','second-view');
      divAdding.setAttribute('class','first-view');
  }
  addToMain(notka:string,c?:string){
    
    this._service.addToNotes(notka,this.globalCategory);
    let body = document.getElementById('body');
    let divAdding
      if(c=="a"){ divAdding = document.getElementById(this.globalCategory+'Adding'+this.miniCategory);}
      else { divAdding = document.getElementById(this.globalCategory+'Adding');}
    divAdding.setAttribute('class','second-view');
    body.setAttribute('class','first-view');  
  }
  
  exitAddToMain(c?:string){
    
    let body = document.getElementById('body');
    let divAdding
    if(c=="a"){ divAdding = document.getElementById(this.globalCategory+'Adding'+this.miniCategory);}
    else { divAdding = document.getElementById(this.globalCategory+'Adding');}
    divAdding.setAttribute('class','second-view');
    body.setAttribute('class','first-view');
  }
  editable:Array<boolean>=[false,false,false,false];
  edIndex:number;
  editing(a:number){
    this.editable[a]=!this.editable[a];
    this.edIndex=a;
  }
  dataToShow
  edit(editableData,category:string){
   /* let body = document.getElementById('body');
    body.setAttribute('class','second-view');
    let divEditing;
    if(this.editable[this.edIndex]==true){
      if(this.edIndex=0)
      { divEditing=document.getElementById(category+"Edit");
      }
      else if(this.edIndex=1) divEditing=document.getElementById(category+"Edit");
      else if (this.edIndex=2) divEditing=document.getElementById(category+"Edit");
      else divEditing=document.getElementById(category+"Edit");
      divEditing.setAttribute('class','first-view');
    }
    this.dataToShow=JSON.stringify */
    //this._router.navigateByUrl('/page404');
    
}




