import { Component, OnInit } from '@angular/core';
import { AreaChartService } from '../../services/area-chart.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {

  parentContainerWidth () {
    return $('.panel-body.with-chart').innerWidth() - 40;
  }


  //view: any[] = [400, 200];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#3f51b5', '#40c741', '#fdba2c', '#ff4081']
  };

  // line, area
  autoScale = true;

  constructor(public chartData: AreaChartService) {
  }

  ngOnInit() {
  }
}
