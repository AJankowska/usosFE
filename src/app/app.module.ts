import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SinglesubjectComponent } from './singlesubject/singlesubject.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WykladComponent } from './adding/wyklad/wyklad.component';
import { NotatkaComponent } from './adding/notatka/notatka.component';
import { NotatkaComponent as NotatkaEditingComponent } from './editing/notatka/notatka.component';
import { WykladComponent as WykladEditingComponent } from './editing/wyklad/wyklad.component';
import { LabcwpComponent as LabcwpEditingComponent } from './editing/labcwp/labcwp.component';
import { LabcwpComponent } from './adding/labcwp/labcwp.component';
import { FserviceService } from './services/fservice.service';
import { ResolveService } from './services/resolve.service';
const appRoutes: Routes = [
  
  {path: ':_id', component: SinglesubjectComponent },
  {path:'',component:SubjectListComponent},
  {path:':_id/notatka/edit', component:NotatkaEditingComponent},
  //  {path:':_id/notatka/edit', component:NotatkaEditingComponent, resolve: {item:ResolveService}},
  {path:':_id/wyklad/edit', component:WykladEditingComponent},
  {path:':_id/labcwp/edit', component:LabcwpEditingComponent},
  {path:':_id/wyklad/1', component:WykladComponent},
  {path:':_id/labcwp/1', component:LabcwpComponent},
  {path:':_id/notatka/1', component:NotatkaComponent},
  {path:'**', component:PagenotfoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SubjectListComponent,
    SinglesubjectComponent,
    PagenotfoundComponent,
    WykladComponent,
    NotatkaComponent,
    LabcwpComponent,
    NotatkaEditingComponent,
    WykladEditingComponent,LabcwpEditingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes),
    
  ],
  providers: [FserviceService,ResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
