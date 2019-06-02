import { Component, OnInit } from '@angular/core';
import { MenuToggleService } from '../../services/menu-toggle.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public isToggle : MenuToggleService) {}

  ngOnInit() {

    // Jquery for toggle navmenu child elements
    $('.sidebar-nav ul .has-child .child-menu').hide();
    $('.sidebar-nav ul .has-child a').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).next('.child-menu').slideToggle(300);
    });
  }


  /**
   * Change class on sidebar
   *
   * Based on {MenuToggleSerivce}
   * boolean value
   * @param {serviceValue} bool
   * @return {sidebarStyle} obj
   */
  sidebarClasses (serviceValue) {
    serviceValue = this.isToggle.menu.getValue();
    let sidebarStyle = {
      'an-sidebar' : true,
      'toggle' : serviceValue,
    }
    return sidebarStyle;
  }
}
