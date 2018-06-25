import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceCurtidasglobalComponent } from './face-curtidasglobal.component';

describe('FaceCurtidasglobalComponent', () => {
  let component: FaceCurtidasglobalComponent;
  let fixture: ComponentFixture<FaceCurtidasglobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceCurtidasglobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceCurtidasglobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
