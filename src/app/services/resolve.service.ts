import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FserviceService } from './fservice.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<any> {

  constructor(private _service :FserviceService) { }
  resolve( route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    this._service.APIgetEditable(this._service.currentId,this._service.getEditableCategory, this._service.getEditableNumber());
    return this._service.getEditable();
  }
}
