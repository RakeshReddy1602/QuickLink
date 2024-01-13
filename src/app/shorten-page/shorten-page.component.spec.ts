import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenPageComponent } from './shorten-page.component';

describe('ShortenPageComponent', () => {
  let component: ShortenPageComponent;
  let fixture: ComponentFixture<ShortenPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortenPageComponent]
    });
    fixture = TestBed.createComponent(ShortenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
