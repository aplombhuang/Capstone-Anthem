import { Component, OnInit } from '@angular/core';

import { MenuToggleService } from '../../services/menu-toggle.service';

declare var jquery:any;
declare var $ :any;



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Logo and user profile image
  logo = '../../../assets/img/logo.png';
  image = '../../../assets/img/user3.jpg';

  showNotification = false;

  /**
   * Notification Class binding
   * Change toggle class
   * based on showNotification variable
   * @return {classes} obj
   */
  notificationClasses () {
    let classes = {
      'slide-content': true,
      'toggle': this.showNotification
    }
    return classes;
  }

  constructor(public isToggle : MenuToggleService) {
  }


  ngOnInit() {
    $('.toggle-menu md-icon').on('click', function() {
      $(".with-chart").hide().fadeIn('fast');
    });

    $('.toggle-menu md-icon').on('click', function() {
      $(".an-sidebar").toggleClass('toggle');
    })
  }

  /**
   * Call service method to
   * change data on MenuToggleService
   * for sidebar show or hide
   *
   * @method {onToggleMenu()} bool - service method
   * @return {bool}
   */
  toggleSidebar() {
    return this.isToggle.onToggleMenu();
  }
}
