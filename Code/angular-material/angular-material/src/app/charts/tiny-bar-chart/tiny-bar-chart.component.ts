import { Component, OnInit } from '@angular/core';
import { BarChartService } from '../../services/bar-chart.service';

@Component({
  selector: 'app-tiny-bar-chart',
  templateUrl: './tiny-bar-chart.component.html',
  styleUrls: ['./tiny-bar-chart.component.scss']
})
export class TinyBarChartComponent implements OnInit {
  view: any[] = [100, 50];

  // options
  showXAxis = false;
  showYAxis = false;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Population';
  barPadding = 2;
  roundDomains = false;

  colorScheme = {
    domain: ['#40c741']
  };

  constructor(public chartData: BarChartService) {}

  ngOnInit() {
  }

}
