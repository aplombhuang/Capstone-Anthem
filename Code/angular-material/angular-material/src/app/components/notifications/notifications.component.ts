import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(public data: NotificationService) {}

  /**
   * Change class based on notification type
   *
   * @param {typeOfNotification} obj - wheather its
   * succes, warning, danger or user message type
   * @return {obj} of notification type
   */
  notificationType (typeOfNotification) {
    return {
      'success' : typeOfNotification.success,
      'avatar': true,
      'avatar-icon': true,
      'warning': typeOfNotification.warning,
      'danger': typeOfNotification.danger,
    }
  }

  ngOnInit() {}
}
