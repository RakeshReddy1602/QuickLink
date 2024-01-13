import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTutorialsComponent } from './video-tutorials.component';

describe('VideoTutorialsComponent', () => {
  let component: VideoTutorialsComponent;
  let fixture: ComponentFixture<VideoTutorialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoTutorialsComponent]
    });
    fixture = TestBed.createComponent(VideoTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
