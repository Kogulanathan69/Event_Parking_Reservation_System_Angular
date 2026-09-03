import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parking',
  imports: [],
  templateUrl: './parking.html',
  styleUrl: './parking.css'
})
export class Parking implements OnInit {

  eventId: number = 0;
  seatIds: string = '';
  bookingId: number = 0;

  needParking: boolean | null = null;

  parkingSlots = [
    { id: 1, name: 'P1', selected: false, booked: false },
    { id: 2, name: 'P2', selected: false, booked: false },
    { id: 3, name: 'P3', selected: false, booked: true },
    { id: 4, name: 'P4', selected: false, booked: false }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.eventId = Number(
      this.route.snapshot.queryParamMap.get('eventId')
    );

    this.seatIds =
      this.route.snapshot.queryParamMap.get('seats') ?? '';

    this.bookingId = Number(
      this.route.snapshot.queryParamMap.get('bookingId')
    );
  }

  chooseParking(value: boolean): void {
    this.needParking = value;
  }

  selectParking(slot: any): void {

    if (slot.booked) {
      return;
    }

    this.parkingSlots.forEach(
      parking => parking.selected = false
    );

    slot.selected = true;
  }

  get selectedParking() {
    return this.parkingSlots.find(
      slot => slot.selected
    );
  }

  continueToPayment(): void {

    this.router.navigate(
      ['/payment'],
      {
        queryParams: {
          eventId: this.eventId,
          seats: this.seatIds,
          parkingId: this.selectedParking?.id ?? 0,
          bookingId: this.bookingId
        }
      }
    );
  }
}