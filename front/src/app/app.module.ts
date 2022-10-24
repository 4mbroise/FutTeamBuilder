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


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BuildTeamComponent,
    PlayersComponent,
    CardComponent,
    PlayerComponent
    ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    AppRoutingModule
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
