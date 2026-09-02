import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-private-event',
  imports: [FormsModule],
  templateUrl: './private-event.html',
  styleUrl: './private-event.css'
})
export class PrivateEvent {

  eventType: string = 'Wedding';

  eventName: string = '';

  venue: string = '';

  eventDate: string = '';

  guestCount: number = 100;

  needParking: boolean = true;

  submitPrivateEvent(): void {

    const privateEventData = {
      eventType: this.eventType,
      eventName: this.eventName,
      venue: this.venue,
      eventDate: this.eventDate,
      guestCount: this.guestCount,
      needParking: this.needParking
    };

    console.log('Private Event:', privateEventData);

    alert('Private Event details saved!');
  }
}