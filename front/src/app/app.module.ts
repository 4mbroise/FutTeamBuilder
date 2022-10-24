import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BuildTeamComponent } from './build-team/build-team.component';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { PlayersComponent } from './players/players.component';
import { CardComponent } from './shared/card/card.component';
import { PlayerComponent } from './player/player.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { TeamComponent } from './team/team.component';
import { TeamCardComponent } from './shared/team-card/team-card.component';
import { TeamsComponent } from './teams/teams.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BuildTeamComponent,
    PlayersComponent,
    CardComponent,
    PlayerComponent,
    TeamComponent,
    TeamCardComponent,
    TeamsComponent
    ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
