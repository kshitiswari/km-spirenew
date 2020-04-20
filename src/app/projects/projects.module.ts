import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { HousingComponent } from './housing/housing.component';
import { InstitutionalComponent } from './institutional/institutional.component';
import { CommercialComponent } from './commercial/commercial.component';
import { LandscapeComponent } from './landscape/landscape.component';


@NgModule({
  declarations: [
    HousingComponent, 
    InstitutionalComponent, 
    CommercialComponent, 
    LandscapeComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
