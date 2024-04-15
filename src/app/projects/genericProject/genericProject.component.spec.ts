import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericProjectComponent } from './genericProject.component';

describe('GenericProjectComponent', () => {
  let component: GenericProjectComponent;
  let fixture: ComponentFixture<GenericProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericProjectComponent]
    });
    fixture = TestBed.createComponent(GenericProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
