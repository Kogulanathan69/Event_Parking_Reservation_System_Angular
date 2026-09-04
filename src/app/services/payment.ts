import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = 'https://localhost:7129/api/Payment';

  constructor(private http: HttpClient) {}

  createPayment(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}