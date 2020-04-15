import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HousingComponent } from './housing/housing.component';
import { InstitutionalComponent } from './institutional/institutional.component';
import { CommercialComponent } from './commercial/commercial.component';
import { LandscapeComponent } from './landscape/landscape.component';


const routes: Routes = [
  {path:'projects/housing',component:HousingComponent},
  {path:'projects/institutional',component:InstitutionalComponent},
  {path:'projects/commercial',component:CommercialComponent},
  {path:'projects/landscape',component:LandscapeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
