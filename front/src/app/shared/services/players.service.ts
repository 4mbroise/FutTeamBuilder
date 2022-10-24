import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { defaultIfEmpty, filter, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Player } from '../types/player.type';


@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private readonly _backendURL: any;

  constructor(private _http: HttpClient) {

    this._backendURL = {};

    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`


    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    // @ts-ignore
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);
    Object.keys(this._backendURL).forEach(k => console.log("url !!! "+this._backendURL[k]));
  }

  fetchAll(): Observable<Player[]> {


    return this._http.get<Player[]>(this._backendURL.allPlayers)
      .pipe(
        filter((player: Player[]) => !!player),
        defaultIfEmpty([])
      );
    }

}
