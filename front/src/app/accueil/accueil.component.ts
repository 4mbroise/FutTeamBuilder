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

  goBuildTeam() { this._router.navigate(['/build-team/']);}

}

