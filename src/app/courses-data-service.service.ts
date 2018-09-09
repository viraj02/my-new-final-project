import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesDataService {

  constructor(private httpService: HttpClient) { }

  getCoursesFromJson()
  {
    return this.httpService.get('./assets/courses.json');
  }
}
