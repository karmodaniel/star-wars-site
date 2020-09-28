import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmesComponent } from './filmes/filmes.component';
import { HomeComponent } from './home/home.component';
import { NavesComponent } from './naves/naves.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { PlanetasComponent } from './planetas/planetas.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'personagens',
    component: PersonagensComponent
  },
  {
    path: 'filmes',
    component: FilmesComponent
  },
  {
    path: 'planetas',
    component: PlanetasComponent
  },
  {
    path: 'naves',
    component: NavesComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
