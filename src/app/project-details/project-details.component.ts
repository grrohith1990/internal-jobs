import { Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {

  @Input() project: any;

  constructor() { }

  ngOnInit(): void {
  }

}
