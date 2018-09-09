import { TestBed, inject } from '@angular/core/testing';

import { CoursesDataServiceService } from './courses-data-service.service';

describe('CoursesDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesDataServiceService]
    });
  });

  it('should be created', inject([CoursesDataServiceService], (service: CoursesDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
