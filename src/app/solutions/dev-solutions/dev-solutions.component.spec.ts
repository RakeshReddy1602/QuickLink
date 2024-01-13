import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevSolutionsComponent } from './dev-solutions.component';

describe('DevSolutionsComponent', () => {
  let component: DevSolutionsComponent;
  let fixture: ComponentFixture<DevSolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevSolutionsComponent]
    });
    fixture = TestBed.createComponent(DevSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
