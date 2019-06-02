import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {

  // Checkbox configuration options
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;


  // Radio button configuration
  favoriteSeason: string;
  favoriteSeasonTwo: string;

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];

  seasonTwo = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];


  // Switch button configuration
  colorSwitch = 'accent';
  checkedSwitch = false;
  disabledSwitch = false;
  constructor() { }

  ngOnInit() {
  }

}
