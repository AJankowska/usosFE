import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglesubjectComponent } from './singlesubject.component';

describe('SinglesubjectComponent', () => {
  let component: SinglesubjectComponent;
  let fixture: ComponentFixture<SinglesubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglesubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglesubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
