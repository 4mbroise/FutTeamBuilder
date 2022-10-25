import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'acceuil', component:AccueilComponent},
  { path: '', redirectTo: 'acceuil', pathMatch: 'full'},
  { path: 'players',  component: PlayersComponent },
  { path: 'teams',  component: TeamsComponent },
  { path: 'edit/:id', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }