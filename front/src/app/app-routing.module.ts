import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PlayerComponent } from './player/player.component';
import { PlayersComponent } from './players/players.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { TeamComponent } from './team/team.component';
import { TeamsComponent } from './teams/teams.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'acceuil', component:AccueilComponent},
  { path: '', redirectTo: 'acceuil', pathMatch: 'full'},
  { path: 'players',  component: PlayersComponent },
  { path: 'teams',  component: TeamsComponent },
  { path: 'edit/:_id', component: UpdateComponent },
  { path: 'player/:_id', component: PlayerComponent },
  { path: 'teamDetails', component:TeamDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }