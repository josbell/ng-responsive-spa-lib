import { Subscription } from './../view-models/subscription';
import { StudentProfile } from './../view-models/student-profile';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  profile: StudentProfile = {
    id: 'a123',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@gmail.com',
    userName: 'john.doe',
    password: '123456',
    birthday: new Date('1990, 01, 01'),
    membership: 'premium'
  };

  subscription: Subscription = {
    id: 'j123',
    name: 'Platinum Membership',
    cost: 60,
    paymentFreq: 'month',
    features: [
      'Unlimited Classes',
      'Unlimited Team Memberships',
      'Discounted Merchandise'
    ],
    startDate: new Date(),
    nextBillingDate: new Date(),
    status: 'active',
  };

  constructor() { }

  getProfile = () => of(this.profile);

  getSubscription = () => of(this.subscription);

}


