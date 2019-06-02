import { Component, OnInit } from '@angular/core';
import { OurServicesService } from '../../../services/our-services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor( public data: OurServicesService) { }

  ngOnInit() {
  }

}
