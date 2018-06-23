import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaCurtidasComponent } from './insta-curtidas.component';

describe('InstaCurtidasComponent', () => {
  let component: InstaCurtidasComponent;
  let fixture: ComponentFixture<InstaCurtidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstaCurtidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaCurtidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
