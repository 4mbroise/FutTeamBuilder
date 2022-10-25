import { Component, Input, NgModule } from '@angular/core';
import { NgxChartsModule, LegendPosition, Color, ScaleType } from '@swimlane/ngx-charts';
import { Stat } from '../types/stat.type';

@Component({
  selector: 'stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent {
  
  private _stat: Stat;

  @Input()
  set stat(person: Stat) {
    this._stat = person;
  }

  get unit(): string {
    return this._stat.name;
  }

  get statAsArray(): Stat[] {
    if(!!this._stat){
      return [this._stat];
    } return [
      {
        name: 'Spain',
        value: 4300000,
      },
    ];
  }

  get customColors() : Function {
    return () => {
        if(this._stat.value >= 80){
          return "#008000	";
        } else if(this._stat.value >= 70){
          return "#66a80f	";
        } if(this._stat.value >= 60){
          return "#e6b600	";
        } if(this._stat.value >= 50){
          return "#d95c0f	";
        }
        return "#c92a2a";
    }
  }

  colorScheme :Color = {
    name: 'color',
    selectable: false,
    group: ScaleType.Linear,
    domain: ['#5AA454']
  }

  constructor() {
    this._stat = {} as Stat
  }

}