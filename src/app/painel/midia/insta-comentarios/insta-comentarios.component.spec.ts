import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaComentariosComponent } from './insta-comentarios.component';

describe('InstaComentariosComponent', () => {
  let component: InstaComentariosComponent;
  let fixture: ComponentFixture<InstaComentariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstaComentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
