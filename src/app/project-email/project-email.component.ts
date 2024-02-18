import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ProjectService } from '../services/project-service';

@Component({
  selector: 'app-project-email',
  templateUrl: './project-email.component.html',
  styleUrls: ['./project-email.component.scss']
})
export class ProjectEmailComponent {

  @Input() project: any;
  email: any

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    console.log(this.project);
  }

  sendEmail(data) {
    console.log(data);
    this.projectService.sendEmail(data, this.email).subscribe(item => console.log('Email Sent Successfully'))
  }

}
