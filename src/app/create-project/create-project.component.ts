import { Component } from '@angular/core';
import { Project } from '../modal/project';
import { ProjectService } from '../services/project-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent {
  project: Project = {
    title: '',
    kunde: '',
    start: null,
    ende: null,
    extension: null,
    einsatzort: '',
    auslastung: '',
    level: '',
    anzahl: '',
    ansprechpartner: ''
  };
  submitted = false

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
  }

  saveProject(): void {
    const data = {
      title: this.project.title,
      kunde: this.project.kunde,
      start: this.project.start,
      ende: this.project.ende,
      extension: this.project.extension,
      einsatzort: this.project.einsatzort,
      auslastung: this.project.auslastung,
      level: this.project.level,
      anzahl: this.project.anzahl,
      ansprechpartner: this.project.ansprechpartner,
    };

    this.projectService.create(data)
      .subscribe({
        next: (res) => {
          this.submitted = true;
          this.router.navigateByUrl('/');
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.project = {
      title: '',
      kunde: '',
      start: null,
      ende: null,
      extension: null,
      einsatzort: '',
      auslastung: '',
      level: '',
      anzahl: '',
      ansprechpartner: ''
    };
  }
}
