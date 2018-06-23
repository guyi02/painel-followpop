import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaSeguidoresComponent } from './insta-seguidores.component';

describe('InstaSeguidoresComponent', () => {
  let component: InstaSeguidoresComponent;
  let fixture: ComponentFixture<InstaSeguidoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstaSeguidoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaSeguidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
