import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsListComponent } from './destinations-list/destinations-list.component';


const routes: Routes = [
  { path: 'find-flights', component: DestinationsListComponent },
  // { path: 'find-activities', component: HeroesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
