import { Component, OnInit } from '@angular/core';
import { BarChartService } from '../../services/bar-chart.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss']
})
export class GaugeChartComponent implements OnInit {

  parentContainerWidth () {
    return $('.panel-body.with-chart').innerWidth() - 40;
  }

  colorScheme = {
    domain: ['#3f51b5', '#40c741', '#fdba2c', '#ff4081']
  };


  constructor(public chartData: BarChartService) { }
  ngOnInit() {
  }

}
