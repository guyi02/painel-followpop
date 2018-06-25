import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceCurtidaspaginaComponent } from './face-curtidaspagina.component';

describe('FaceCurtidaspaginaComponent', () => {
  let component: FaceCurtidaspaginaComponent;
  let fixture: ComponentFixture<FaceCurtidaspaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceCurtidaspaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceCurtidaspaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
