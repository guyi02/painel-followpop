import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeViewsComponent } from './youtube-views.component';

describe('YoutubeViewsComponent', () => {
  let component: YoutubeViewsComponent;
  let fixture: ComponentFixture<YoutubeViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
