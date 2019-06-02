import { Component, OnInit } from '@angular/core';
import { OurTeamService } from '../../../services/our-team.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor( public data: OurTeamService) { }

  ngOnInit() {
  }

}
