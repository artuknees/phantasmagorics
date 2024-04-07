import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project301w118Component } from './project301w118.component';

describe('Project301w118Component', () => {
  let component: Project301w118Component;
  let fixture: ComponentFixture<Project301w118Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Project301w118Component]
    });
    fixture = TestBed.createComponent(Project301w118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
