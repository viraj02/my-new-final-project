import { Component, OnInit } from '@angular/core';
import { CoursesDataService } from '../courses-data-service.service';
import { CoursesFormat } from '../coursesFormat';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css']
})
export class CoursesDetailsComponent implements OnInit {

  coursesArray:CoursesFormat[];
  sub: any;
  sub2: any;
  name: any;
  name2: any;

  constructor(private _coursesjson:CoursesDataService, private routes:ActivatedRoute) { }


  ngOnInit() {

    this._coursesjson.getCoursesFromJson().subscribe(data => {
      this.coursesArray = data as CoursesFormat[]
    });

    this.sub=this.routes.params.subscribe(params => { 
      this.name = params['name'];
    });
    
    this.sub2=this.routes.params.subscribe(params => { 
      this.name2 = params['duration'];

    });
  }

  
  

}
