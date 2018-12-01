import { Component, OnInit } from '@angular/core';
import { FserviceService } from '../../services/fservice.service';

@Component({
  selector: 'app-labcwp',
  templateUrl: './labcwp.component.html',
  styleUrls: ['./labcwp.component.css']
})
export class LabcwpComponent implements OnInit {
  co: string;
  kiedy: Date;
  wejsciowka: boolean | null;
  sprawko: boolean | null;
  zal: boolean | null;
  notatka: string;
  number: number;
  item;
  category;
  constructor(private _service: FserviceService) { }

  ngOnInit() {
    this.category = this._service.getEditableCategory();
    this.number = this._service.getEditableNumber();
    this._service.getEditable().subscribe(a => {
      this.item = a;

    })
  }
  edit() {
    let itemChange
    if (this.category == "laborka") {
      itemChange = {
        co: this.co,
        kiedy: this.item[this.number].kiedy,
        wejsciowka: this.wejsciowka,
        sprawko: this.sprawko,
        notatka: this.notatka,
        zaliczone: () => {
          if (this.wejsciowka == true && this.sprawko == true) return true
          else if (this.wejsciowka == false || this.sprawko == false) return false
          else return null
        }
      }
    }
    else if (this.category == "projekt") {
      itemChange = {
        co: this.co,
        kiedy: this.item[this.number].kiedy,
      }
    }
    else if (this.category == "cwiczenia") {
      itemChange = {
        co: this.co,
        kiedy: this.item[this.number].kiedy,
        notatka: this.notatka,
        zaliczone: this.zal
      }
    }
    this.item[this.number] = itemChange;
    this._service.edit(this.item);
    window.history.go(-1);
  }
  back() {
    window.history.go(-1);
  }

}
