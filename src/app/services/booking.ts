import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiUrl = 'https://localhost:7129/api/Booking';

  constructor(private http: HttpClient) {}

  createBooking(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  getAllBookings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getBookingById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  cancelBooking(id: number): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/${id}/cancel`,
      {}
    );
  }
}