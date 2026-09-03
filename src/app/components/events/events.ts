import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events',
  imports: [RouterLink],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {

  events = [
  {
    id: 1,
    name: 'Music Night',
    date: '10 Sep 2026',
    venue: 'Jaffna Cultural Hall',
    price: 2500,
    image: '/images/music-night.jpg.avif'
  },
  {
    id: 2,
    name: 'Tech Conference',
    date: '15 Sep 2026',
    venue: 'City Convention Center',
    price: 1800,
    image: '/images/tech-conference.jpg.avif'
  },
  {
    id: 3,
    name: 'Food Festival',
    date: '20 Sep 2026',
    venue: 'Open Ground',
    price: 1000,
    image: '/images/food-festival.jpg.jpg'
  }
];
}
