import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  value = 50;
  color = 'primary';
  mode = 'indeterminate';
  modeOne = 'determinate';

  modeBar = 'buffer';
  colorBar = 'primary';
  bufferValue = 75;

  constructor() { }

  ngOnInit() {
  }

}
