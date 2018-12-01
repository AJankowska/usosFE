import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WykladComponent } from './wyklad.component';

describe('WykladComponent', () => {
  let component: WykladComponent;
  let fixture: ComponentFixture<WykladComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WykladComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WykladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
