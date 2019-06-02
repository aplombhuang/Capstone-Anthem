import { Injectable } from '@angular/core';

@Injectable()
export class OurTeamService {

  teamMembers = [
    {
      id: 1,
      name: 'Maxwell',
      role: 'Ceo',
      img: '../../assets/img/user1.jpg'
    },
    {
      id: 2,
      name: 'EMMA ARIYA',
      role: 'Chief of design',
      img: '../../assets/img/user2.jpg'
    },
    {
      id: 3,
      name: 'GILFO WILLIAM',
      role: 'Cto',
      img: '../../assets/img/user3.jpg'
    }
  ]

  constructor() { }

}
