import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Events } from './components/events/events';
import { Booking } from './components/booking/booking';
import { Parking } from './components/parking/parking';
import { Payment } from './components/payment/payment';
import { BookingType } from './components/booking-type/booking-type';
import { PrivateEvent } from './components/private-event/private-event';
import { MyBookings } from './components/my-bookings/my-bookings';
import { About } from './components/about/about';
import { OtpVerification } from './components/otp-verification/otp-verification';
import { AdminDashboard } from './components/admin-dashboard/admin-dashboard';
import { ForgotPassword } from './components/forgot-password/forgot-password';
import { ResetPassword } from './components/reset-password/reset-password';
import { ChangePassword } from './components/change-password/change-password';

export const routes: Routes = [

  { path: '', component: Home },

  { path: 'about', component: About },

  { path: 'events', component: Events },

  { path: 'booking', component: BookingType },

  { path: 'booking/:id', component: Booking },

  { path: 'private-event', component: PrivateEvent },

  { path: 'parking', component: Parking },

  { path: 'payment', component: Payment },

  { path: 'my-bookings', component: MyBookings },

  { path: 'login', component: Login },

  { path: 'register', component: Register },

  { path: 'otp-verification', component: OtpVerification },

  { path: 'admin', component: AdminDashboard },

  { path: 'forgot-password', component: ForgotPassword },

  { path: 'reset-password', component: ResetPassword }, 

  { path: 'change-password', component: ChangePassword },

  { path: 'reset-password', component: ResetPassword }

];