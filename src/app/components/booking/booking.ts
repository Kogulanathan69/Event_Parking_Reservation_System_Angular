import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../services/booking';

@Component({
  selector: 'app-booking',
  imports: [],
  templateUrl: './booking.html',
  styleUrl: './booking.css'
})
export class Booking implements OnInit {

  eventId: number = 0;

  seats = [
    { id: 1, name: 'A1', selected: false, booked: false },
    { id: 2, name: 'A2', selected: false, booked: false },
    { id: 3, name: 'A3', selected: false, booked: true },
    { id: 4, name: 'A4', selected: false, booked: false },

    { id: 5, name: 'B1', selected: false, booked: false },
    { id: 6, name: 'B2', selected: false, booked: false },
    { id: 7, name: 'B3', selected: false, booked: true },
    { id: 8, name: 'B4', selected: false, booked: false }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingService : BookingService
  ) {}

  ngOnInit(): void {
    this.eventId = Number(
      this.route.snapshot.paramMap.get('id')
    );
  }

  selectSeat(seat: any): void {

    if (seat.booked) {
      return;
    }

    seat.selected = !seat.selected;
  }

  get selectedSeats() {
    return this.seats.filter(
      seat => seat.selected
    );
  }

  goToParking(): void {

    const seatIds = this.selectedSeats.map(
      seat => seat.id
    );

    this.router.navigate(
      ['/parking'],
      {
        queryParams: {
          eventId: this.eventId,
          seats: seatIds.join(',')
        }
      }
    );
  }

  createBooking(): void {

  const bookingData = {
    userId: 1,
    eventId: this.eventId,
    seatIds: this.selectedSeats.map(
      seat => seat.id
    ),
    totalAmount: 2500
  };

  this.bookingService
    .createBooking(bookingData)
    .subscribe({

      next: (response) => {

        console.log('Booking created:', response);

        const bookingId = response.id;

        this.router.navigate(
          ['/parking'],
          {
            queryParams: {
              eventId: this.eventId,
              seats: this.selectedSeats
                .map(seat => seat.id)
                .join(','),
              bookingId: bookingId
            }
          }
        );

      },

      error: (error) => {

        console.error('Booking error:', error);

        alert(
          error?.error?.message ?? 'Booking failed'
        );

      }

    });
}


}