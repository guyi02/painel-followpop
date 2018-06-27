import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeDislikesComponent } from './youtube-dislikes.component';

describe('YoutubeDislikesComponent', () => {
  let component: YoutubeDislikesComponent;
  let fixture: ComponentFixture<YoutubeDislikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeDislikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeDislikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
