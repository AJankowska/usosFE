import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FserviceService } from '../services/fservice.service';

@Component({
  selector: 'app-singlesubject',
  templateUrl: './singlesubject.component.html',
  styleUrls: ['./singlesubject.component.css']
})
export class SinglesubjectComponent implements OnInit {
  subjectId: string;
  subject;
  trash_laborki: boolean = false;
  trash_labNotes: boolean = false;
  trash_wyklad: boolean = false;
  trash_wykNotes: boolean = false;

  constructor(private _route: ActivatedRoute,
    private router: Router, private _service: FserviceService) { }

  ngOnInit() {
    let id = this._route.snapshot.paramMap.get('_id');
    this.subjectId = id;
    this._service.APIgetSubject(this.subjectId);
    this._service.getSubject().subscribe(a => this.subject = a);
  }
  editable(kategoria: string, i: number) {
    console.log(kategoria);
    this._service.APIgetEditable(this.subjectId, kategoria, i);

  }

  deleteItem(kategoria: string, i: number) {
    console.log(kategoria);
    console.log(i);

    kategoria == "laborki" || kategoria == "projekt" || kategoria == "cwiczenia" ? this.trash_laborki = false : kategoria == "wyklad" ? this.trash_wyklad = false : kategoria == "wNotatki" ? this.trash_wykNotes = false : this.trash_labNotes = false;
    this._service.deleteItem(kategoria, i, this.subject[kategoria[i]]);


  }


}




