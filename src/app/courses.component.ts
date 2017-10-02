import {Component} from '@angular/core'
import {CoursesService} from './services/courses.service'

@Component({
    selector: 'courses',
    template: `
        <h2>{{ "Title: " + getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})

export class CoursesComponent{
    courses;
    
    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }


    title = "List of courses";

    getTitle(){
        return this.title;
    }

}