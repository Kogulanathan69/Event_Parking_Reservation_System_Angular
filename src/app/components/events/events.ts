import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
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
    },
    {
      id: 4,
      name: 'Business Summit',
      date: '25 Sep 2026',
      venue: 'Grand Hall',
      price: 2200,
      image: '/images/business-summit.jp.webp'
    },
    {
      id: 5,
      name: 'Art & Culture Expo',
      date: '28 Sep 2026',
      venue: 'Heritage Centre',
      price: 1200,
      image: '/images/imagesart-expo.jpg.webp'
    },
    {
      id: 6,
      name: 'Startup Meetup',
      date: '02 Oct 2026',
      venue: 'Innovation Hub',
      price: 1500,
      image: '/images/startup-meetup.jpg.webp'
    }
  ];
}