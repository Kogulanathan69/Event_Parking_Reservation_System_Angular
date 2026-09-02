import { Routes } from '@angular/router';

import{ Home } from './components/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Events } from './components/events/events';
import { Booking } from './components/booking/booking';
import { Parking } from './components/parking/parking';
import { Payment } from './components/payment/payment';
import { BookingType } from './components/booking-type/booking-type';
import { PrivateEvent } from './components/private-event/private-event';


export const routes: Routes = [


    {path : '' , component:Home},
    {path : 'events', component:Events},
    {path : 'booing', component:Booking},
    {path : 'booking/:id', component:Booking},
    {path : 'parking', component:Parking},
    {path : 'payment', component:Payment},
    {path : 'login', component:Login},
    {path : 'register', component:Register},
    { path: 'booking', component: BookingType },
    { path: 'booking/:id', component: Booking },
    { path: 'private-event', component: PrivateEvent },
    
];
