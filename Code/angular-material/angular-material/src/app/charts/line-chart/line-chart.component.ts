import { Component, OnInit } from '@angular/core';
import { BarChartService } from '../../services/bar-chart.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  parentContainerWidth () {
    return $('.panel-body.with-chart').innerWidth() - 40;
  }


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
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
