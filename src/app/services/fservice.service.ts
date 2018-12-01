import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Notatka } from '../interfaces/notatka';
@Injectable({
  providedIn: 'root'
})
export class FserviceService {
  url: string = "/api/";
  private source = new BehaviorSubject(new Array());
  sourceO = this.source.asObservable();
  constructor(private _http: HttpClient) { }
  APIgetSource() {
    this._http.get<Array<any>>(this.url).subscribe(a => this.source.next(a));
  }
  getSource(): Observable<Array<any>> {
    return this.sourceO;
  }
  private ECTS = new BehaviorSubject(new Array());
  ECTSO = this.ECTS.asObservable();
  APIgetECTS() {
    this._http.get<Array<any>>(this.url + "ECTS").subscribe(a => this.ECTS.next(a));
  }
  getECTS(): Observable<Array<any>> {
    return this.ECTSO;
  }
  private subject = new BehaviorSubject(new Object());
  subjectO = this.subject.asObservable();
  currentId: number;
  APIgetSubject(id) {
    this.currentId = id;
    this._http.get<any>(this.url + id).subscribe(a => this.subject.next(a));
  }
  getSubject() {
    return this.subjectO;
  }
  private editableAll = new Subject();
  editableAllO = this.editableAll.asObservable();
  editableNumber = 0;
  editableCategory: string;
  APIgetEditable(id, category, i) {
    this.editableNumber = i;
    this.editableCategory = category;
    this._http.get<any>(this.url + "editable/" + id + "/" + category).subscribe(a => this.editableAll.next(a));
  }
  getEditable() {
    return this.editableAllO;
  }
  getEditableNumber() {
    return this.editableNumber;
  }
  getEditableCategory() {
    return this.editableCategory;
  }
  edit(item) {
    this._http.put(this.url + "editable/" + this.currentId + "/" + this.editableCategory + "/save", item).subscribe()
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
  deleteItem(category: string, itemNo, item: object) {

    this._http.put(this.url + "delete/" + this.currentId + "/" + category + "/" + itemNo, item).subscribe();
    //console.log(this.url+this.currentId+"/"+category+"/1",itemNo);
  }
  //nowa.!
  add(item, category: string) {
    let a = item.kiedy;
    item.kiedy = a.slice(3, 15);
    console.log(item);
    this._http.put(this.url + "add/" + this.currentId + "/" + category, item).subscribe();
  }


}

