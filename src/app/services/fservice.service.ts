import { Injectable } from '@angular/core';
import {BehaviorSubject,Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Notatka } from '../interfaces/notatka';
@Injectable({
  providedIn: 'root'
})
export class FserviceService {
url:string="/api/";
private source = new BehaviorSubject(new Array());
sourceO = this.source.asObservable();
  constructor(private _http:HttpClient) { }
  APIgetSource(){
    this._http.get<Array<any>>(this.url).subscribe(a => this.source.next(a));
  }
  getSource():Observable<Array<any>>{
    return this.sourceO;
  }
  private ECTS = new BehaviorSubject(new Array());
  ECTSO= this.ECTS.asObservable();
  APIgetECTS(){
    this._http.get<Array<any>>(this.url+"ECTS").subscribe(a => this.ECTS.next(a));
  }
  getECTS():Observable<Array<any>>{
    return this.ECTSO;
  }
  private subject = new BehaviorSubject(new Array());
  subjectO= this.subject.asObservable();
  currentId:number;
  APIgetSubject(id){
    this.currentId=id;
    this._http.get<Array<any>>(this.url+id).subscribe(a => this.subject.next(a));
  }
  getSubject(){
   return this.subjectO;
  }
  /*addToNotes(note:string,category:string){
    console.log(category);
    let notes:Notatka = {
      kiedy:new Date(),
      description:note
    }
    this._http.put(this.url+this.currentId+"/"+category+"Notatki/1",notes);
    console.log(this.url+this.currentId+"/"+category+'/1');
  }*/
  deleteItem(category:string,item:Object){
    this._http.delete(this.url+this.currentId+"/"+category+"/1",item);
  }
  //nowa.!
  add(item,category:string){
    this._http.put(this.url+this.currentId+"/"+category+"/1",item).subscribe();
  }
}

