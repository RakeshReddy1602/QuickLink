import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsSolutionsComponent } from './sms-solutions.component';

describe('SmsSolutionsComponent', () => {
  let component: SmsSolutionsComponent;
  let fixture: ComponentFixture<SmsSolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmsSolutionsComponent]
    });
    fixture = TestBed.createComponent(SmsSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
