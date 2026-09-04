import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../../services/payment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  imports: [FormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css'
})
export class Payment implements OnInit {

  eventId: number = 0;
  seatIds: string = '';
  parkingId: number = 0;
  bookingId: number = 0;

  ticketAmount: number = 2500;
  parkingFee: number = 500;

  paymentMethod: string = 'Card';

  constructor(
    private route: ActivatedRoute,
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {

    this.eventId = Number(
      this.route.snapshot.queryParamMap.get('eventId')
    );

    this.seatIds =
      this.route.snapshot.queryParamMap.get('seats') ?? '';

    this.parkingId = Number(
      this.route.snapshot.queryParamMap.get('parkingId')
    );

    this.bookingId = Number(
      this.route.snapshot.queryParamMap.get('bookingId')
    );
  }

  get totalAmount(): number {

    if (this.parkingId > 0) {
      return this.ticketAmount + this.parkingFee;
    }

    return this.ticketAmount;
  }

 makePayment(): void {

  const paymentData = {
    bookingId: this.bookingId,
    amount: this.ticketAmount,
    paymentMethod: this.paymentMethod
  };

  console.log('Sending payment:', paymentData);

  this.paymentService
    .createPayment(paymentData)
    .subscribe({

      next: (response) => {

        console.log('Payment created:', response);

        alert('Payment Successful!');

      },

      error: (error) => {

        console.error('Payment error:', error);

        alert(
          error?.error?.message ?? 'Payment failed'
        );

      }

    });
  }
}