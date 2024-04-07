import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHotelComponent } from './project-hotel.component';

describe('ProjectHotelComponent', () => {
  let component: ProjectHotelComponent;
  let fixture: ComponentFixture<ProjectHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectHotelComponent]
    });
    fixture = TestBed.createComponent(ProjectHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
