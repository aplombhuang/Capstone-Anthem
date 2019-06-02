import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

  constructor() { }

  notificationData = [
    {
      id: 1,
      name: 'Admin',
      avatar: '',
      detail: 'Review user data request for Amanda Nunes',
      time: '3 min ago',
      read: false
    },
    {
      id: 2,
      name: 'DBA',
      avatar: '../../assets/img/user1.jpg',
      detail: 'Completing updates for schema',
      time: '4 min ago',
      read: true
    },
    {
      id: 3,
      icon: 'fa fa-exclamation-triangle',
      detail: 'Server load is 95%, trying to reduce it!',
      time: '4 min ago',
      read: true,
      warning: true
    },
    {
      id: 4,
      icon: 'fa fa-user-times',
      detail: '7 Failed Commits!',
      time: '6 min ago',
      read: true,
      danger: true
    },
    {
      id: 5,
      name: 'Admin',
      avatar: '',
      detail: 'Sent a new user registration to Amanda Nunes',
      time: '23 min ago',
      read: false
    },

    {
      id: 6,
      icon: 'fa fa-star',
      detail: '20 Successful commits!',
      time: '30 min ago',
      read: true,
      success: true
    },
    {
      id: 7,
      icon: 'fa fa-exclamation-triangle',
      detail: 'Server load is 99%, trying to reduce it!',
      time: '38 min ago',
      read: true,
      warning: true
    },
    {
      id: 8,
      icon: 'fa fa-user-times',
      detail: '5 Failed Commits!',
      time: '56 min ago',
      read: true,
      danger: true
    },
    {
      id: 9,
      icon: 'fa fa-exclamation-triangle',
      detail: 'Server load is 96%, trying to reduce it!',
      time: '59 min ago',
      read: true,
      warning: true
    },
    {
      id: 10,
      icon: 'fa fa-star',
      detail: '10 Successful commits!',
      time: '59 min ago',
      read: true,
      success: true
    },

  ]

}
