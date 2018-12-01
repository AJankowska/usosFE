import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotatkaComponent } from './notatka.component';

describe('NotatkaComponent', () => {
  let component: NotatkaComponent;
  let fixture: ComponentFixture<NotatkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotatkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotatkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
