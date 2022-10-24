import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { BuildTeamComponent } from './build-team/build-team.component';
import { PlayersComponent } from './players/players.component';

const routes: Routes = [
  { path: 'acceuil', component:AccueilComponent},
  { path: '', redirectTo: 'acceuil', pathMatch: 'full'},
  { path: 'build-team',  component: BuildTeamComponent },
  { path: 'players',  component: PlayersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }