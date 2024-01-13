import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseSolComponent } from './enterprise-sol.component';

describe('EnterpriseSolComponent', () => {
  let component: EnterpriseSolComponent;
  let fixture: ComponentFixture<EnterpriseSolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterpriseSolComponent]
    });
    fixture = TestBed.createComponent(EnterpriseSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
