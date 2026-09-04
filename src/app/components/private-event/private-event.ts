import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-private-event',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './private-event.html',
  styleUrl: './private-event.css'
})
export class PrivateEvent {

  eventType = 'Wedding';
  eventName = '';
  venue = '';
  eventDate = '';
  guestCount = 80;
  needParking = true;

  message = '';
  errorMessage = '';

  setParking(value: boolean): void {
    this.needParking = value;
  }

  continueBooking(): void {

    this.message = '';
    this.errorMessage = '';

    if (
      !this.eventType ||
      !this.eventName ||
      !this.venue ||
      !this.eventDate ||
      !this.guestCount
    ) {
      this.errorMessage = 'Please complete all required fields.';
      return;
    }

    if (this.guestCount <= 0) {
      this.errorMessage = 'Guest count must be greater than 0.';
      return;
    }

    this.message = 'Private event details are ready to continue.';

    console.log({
      eventType: this.eventType,
      eventName: this.eventName,
      venue: this.venue,
      eventDate: this.eventDate,
      guestCount: this.guestCount,
      needParking: this.needParking
    });

    /*
      Backend API later connect pannuvom.
    */
  }
}