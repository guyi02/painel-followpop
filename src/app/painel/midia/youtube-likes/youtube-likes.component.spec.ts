import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeLikesComponent } from './youtube-likes.component';

describe('YoutubeLikesComponent', () => {
  let component: YoutubeLikesComponent;
  let fixture: ComponentFixture<YoutubeLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
