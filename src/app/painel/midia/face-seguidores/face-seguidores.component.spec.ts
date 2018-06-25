import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSeguidoresComponent } from './face-seguidores.component';

describe('FaceSeguidoresComponent', () => {
  let component: FaceSeguidoresComponent;
  let fixture: ComponentFixture<FaceSeguidoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceSeguidoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceSeguidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
