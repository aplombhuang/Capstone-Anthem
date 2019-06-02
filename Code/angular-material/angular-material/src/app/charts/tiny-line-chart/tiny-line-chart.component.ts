import { Component, OnInit } from '@angular/core';
import { BarChartService } from '../../services/bar-chart.service';

@Component({
  selector: 'app-tiny-line-chart',
  templateUrl: './tiny-line-chart.component.html',
  styleUrls: ['./tiny-line-chart.component.scss']
})
export class TinyLineChartComponent implements OnInit {
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

  colorScheme = {
    domain: ['#ff4081']
  };

  // line, area
  autoScale = true;

  constructor(public chartData: BarChartService) { }

  ngOnInit() {
  }

}
