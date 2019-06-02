import { Injectable } from '@angular/core';

const text = 'Loren Ipsum Dolor sit amit';

@Injectable()
export class BlogService {

  constructor() { }

  blogs = [
    {
      id: 1,
      img: '../../assets/img/grid-large.jpg',
      title: text,
      category: 'Design'
    },
    {
      id: 2,
      img: '../../assets/img/grid-large.jpg',
      title: text,
      category: 'Development'
    },
    {
      id: 3,
      img: '../../assets/img/grid-large.jpg',
      title: text,
      category: 'Movie'
    },
    {
      id: 4,
      img: '../../assets/img/grid-large.jpg',
      title: text,
      category: 'Movie'
    },
    {
      id: 5,
      img: '../../assets/img/grid-large.jpg',
      title: text,
      category: 'App'
    },
    {
      id: 6,
      img: '../../assets/img/grid-large.jpg',
      title: text,
      category: 'Politics'
    }
  ]

}
