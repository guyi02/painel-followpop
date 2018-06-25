import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaStoriesComponent } from './insta-stories.component';

describe('InstaStoriesComponent', () => {
  let component: InstaStoriesComponent;
  let fixture: ComponentFixture<InstaStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstaStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
