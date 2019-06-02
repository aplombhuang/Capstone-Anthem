import { Component, OnInit } from '@angular/core';
import { BarChartService } from '../../services/bar-chart.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  parentContainerWidth () {
    return $('.panel-body.with-chart').innerWidth() - 40;
  }

  //view: any[] = [100, 50];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Population';
  barPadding = 20;
  roundDomains = true;

  colorScheme = {
    domain: ['#3f51b5', '#40c741', '#fdba2c', '#ff4081']
  };

  constructor(public chartData: BarChartService) { }

  ngOnInit() {
  }

}
