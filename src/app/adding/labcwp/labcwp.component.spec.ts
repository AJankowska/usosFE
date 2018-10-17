import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabcwpComponent } from './labcwp.component';

describe('LabcwpComponent', () => {
  let component: LabcwpComponent;
  let fixture: ComponentFixture<LabcwpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabcwpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabcwpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
