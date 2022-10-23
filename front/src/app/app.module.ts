import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BuildTeamComponent } from './build-team/build-team.component';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BuildTeamComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
