import { Component, OnInit } from '@angular/core';

import { CoursesFormat } from '../coursesFormat';
import { CoursesDataService } from 'src/app/courses-data-service.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  providers: [CoursesDataService]
})
export class CoursesListComponent implements OnInit {

  coursesArray:CoursesFormat[];

  constructor(private _coursesjson:CoursesDataService) { }

  ngOnInit() {
    this._coursesjson.getCoursesFromJson().subscribe(data => {
      this.coursesArray = data as CoursesFormat[]
    });
  }

}
