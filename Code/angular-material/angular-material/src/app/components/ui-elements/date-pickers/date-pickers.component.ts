import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pickers',
  templateUrl: './date-pickers.component.html',
  styleUrls: ['./date-pickers.component.scss']
})
export class DatePickersComponent implements OnInit {

  startDate = new Date(1990, 0, 1);

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  constructor() { }

  ngOnInit() {
  }

}
