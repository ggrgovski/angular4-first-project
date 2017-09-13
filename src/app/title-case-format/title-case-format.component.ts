import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title-case-format',
  templateUrl: './title-case-format.component.html',
  styleUrls: ['./title-case-format.component.css']
})
export class TitleCaseFormatComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
  }

}
