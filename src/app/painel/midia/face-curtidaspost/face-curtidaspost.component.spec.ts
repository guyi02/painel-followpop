import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceCurtidaspostComponent } from './face-curtidaspost.component';

describe('FaceCurtidaspostComponent', () => {
  let component: FaceCurtidaspostComponent;
  let fixture: ComponentFixture<FaceCurtidaspostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceCurtidaspostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceCurtidaspostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
