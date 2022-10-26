import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
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
import { FormComponent } from './shared/form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './shared/dialog/dialog.component';
import { FormsModule, ReactiveFormsModule , FormGroup } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UpdateComponent } from './update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StatComponent } from './shared/stat/stat.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TeamDetailsComponent } from './team-details/team-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PlayersComponent,
    CardComponent,
    PlayerComponent,
    TeamComponent,
    TeamCardComponent,
    TeamsComponent,
    DialogComponent,
    FormComponent,
    UpdateComponent,
    StatComponent,
    TeamDetailsComponent,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    AppRoutingModule,
    MatGridListModule,
    NgxChartsModule,
    MatPaginatorModule,
    FlexLayoutModule,
    ReactiveFormsModule, 
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
