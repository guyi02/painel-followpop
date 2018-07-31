import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaSeguidoresGlComponent } from './insta-seguidores-gl.component';

describe('InstaSeguidoresGlComponent', () => {
  let component: InstaSeguidoresGlComponent;
  let fixture: ComponentFixture<InstaSeguidoresGlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstaSeguidoresGlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaSeguidoresGlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
