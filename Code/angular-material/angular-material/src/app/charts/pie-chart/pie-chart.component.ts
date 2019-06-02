import { Component, OnInit } from '@angular/core';
import { BarChartService } from '../../services/bar-chart.service';


declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  parentContainerWidth () {
    return $('.panel-body.with-chart').innerWidth() - 40;
  }


  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;


  colorScheme = {
    domain: ['#3f51b5', '#40c741', '#fdba2c', '#ff4081']
  };


  constructor(public chartData: BarChartService) { }

  ngOnInit() {
  }

}
