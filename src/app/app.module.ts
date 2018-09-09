import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursehomeComponent } from './coursehome/coursehome.component';

// imported Router
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseswithJsonComponent } from './courseswith-json/courseswith-json.component';


const appRoutes:Routes = [
  { path:'coursehome' , component:CoursehomeComponent},
  { path:'courses' , component: CoursesListComponent},
  { path:'course',
   children:[
    {path:'list' , component:CoursesListComponent, children:[
      { path:'details/:name/:duration', component:CoursesDetailsComponent }
    ]}
  ]},
  { path:'coursejson', component:CourseswithJsonComponent },

  { path:'' , redirectTo:'/coursehome', pathMatch:'full'},
  { path:'**' , redirectTo:'/coursehome', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CoursehomeComponent,
    CoursesListComponent,
    CoursesDetailsComponent,
    CourseswithJsonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
