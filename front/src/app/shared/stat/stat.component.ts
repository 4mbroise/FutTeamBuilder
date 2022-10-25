import { Component, NgModule } from '@angular/core';
import { NgxChartsModule, LegendPosition, Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent {
  single = [
    {
      name: 'Spain',
      value: 4300000,
    },
  ];
  
  view: any[] = [500, 400];
  legend: boolean = true;
  legendPosition = LegendPosition.Below

  colorScheme :Color = {
    name: 'color',
    selectable: false,
    group: ScaleType.Linear,
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  }



  constructor() {
  }

}