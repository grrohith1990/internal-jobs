import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { HeaderComponent } from './header/header.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { SearchProjectPipe } from './search-project.pipe'; 
import { ProjectEmailComponent } from './project-email/project-email.component';

const routes: Routes = [
{ 
  path: '', 
  component: ProjectOverviewComponent,
},
  
{ 
  path: 'create-project', 
  component: CreateProjectComponent,
 }

];

@NgModule({
  declarations: [
    AppComponent,
    ProjectOverviewComponent,
    HeaderComponent,
    CreateProjectComponent,
    ProjectDetailsComponent,
    ProjectEmailComponent,
    SearchProjectPipe
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
