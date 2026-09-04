import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-bookings',
  imports: [CommonModule],
  templateUrl: './my-bookings.html',
  styleUrl: './my-bookings.css'
})
export class MyBookings implements OnInit {

  publicBookings: any[] = [];
  privateBookings: any[] = [];

  userId = 1;

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadPublicBookings();
    this.loadPrivateBookings();
  }

  loadPublicBookings(): void {
    this.http
      .get<any[]>(
        `https://localhost:7129/api/Booking/user/${this.userId}`
      )
      .subscribe({
        next: (data) => {
          this.publicBookings = data;

          console.log(
            'Public bookings:',
            data
          );

          this.cdr.detectChanges();
        },

        error: (error) => {
          console.error(
            'Public bookings error:',
            error
          );
        }
      });
  }

  loadPrivateBookings(): void {
    this.http
      .get<any[]>(
        `https://localhost:7129/api/PrivateEventBooking/user/${this.userId}`
      )
      .subscribe({
        next: (data) => {
          this.privateBookings = data;

          console.log(
            'Private bookings:',
            data
          );

          this.cdr.detectChanges();
        },

        error: (error) => {
          console.error(
            'Private bookings error:',
            error
          );
        }
      });
  }
}