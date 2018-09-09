import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseswithJsonComponent } from './courseswith-json.component';

describe('CourseswithJsonComponent', () => {
  let component: CourseswithJsonComponent;
  let fixture: ComponentFixture<CourseswithJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseswithJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseswithJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
