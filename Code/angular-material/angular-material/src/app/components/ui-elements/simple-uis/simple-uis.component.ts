import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-uis',
  templateUrl: './simple-uis.component.html',
  styleUrls: ['./simple-uis.component.scss']
})
export class SimpleUisComponent implements OnInit {
  position = 'above';

  constructor() { }

  ngOnInit() {
  }

}
