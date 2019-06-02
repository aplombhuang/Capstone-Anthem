import { Component, OnInit } from '@angular/core';
import { BarChartService } from '../../services/bar-chart.service';

@Component({
  selector: 'app-tiny-area-chart',
  templateUrl: './tiny-area-chart.component.html',
  styleUrls: ['./tiny-area-chart.component.scss']
})
export class TinyAreaChartComponent implements OnInit {

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
    domain: ['#3f51b5']
  };

  // line, area
  autoScale = true;

  constructor(public chartData: BarChartService) { }

  ngOnInit() {
  }

}
