import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})

export class AccueilComponent implements OnInit {

  constructor(private _route : ActivatedRoute, private _router: Router) {

  }

  ngOnInit(): void {
  }
  
  goToPlayers() { this._router.navigate(['/players/']);}

  goToTeams() { this._router.navigate(['/teams/']); }

}

