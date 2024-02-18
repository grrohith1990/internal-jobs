import { Component, OnInit } from '@angular/core';
import { Project } from '../modal/project';
import { ProjectService } from '../services/project-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {
  projects: Project[] = [];
  selProject: Array<any> = [];
  searchText = '';

  constructor(private projectService: ProjectService) {
    
  }

  ngOnInit() {
    this.projectService.getAll().subscribe({
      next: (data) => {
        this.projects = data;
      }
    });
  }

  selectedProjekt(item:any) {
    this.selProject = this.projects.filter((_, index) => index === item);
  }


}
