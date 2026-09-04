import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-verification',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './otp-verification.html',
  styleUrl: './otp-verification.css'
})
export class OtpVerification {

  @ViewChildren('otpInput')
  otpInputs!: QueryList<ElementRef<HTMLInputElement>>;

  otp: string[] = ['', '', '', ''];

  loading = false;
  errorMessage = '';
  successMessage = '';

  constructor(private router: Router) {}

  onInput(event: Event, index: number): void {

    const input = event.target as HTMLInputElement;

    input.value = input.value.replace(/[^0-9]/g, '');

    if (input.value.length > 1) {
      input.value = input.value.charAt(0);
    }

    this.otp[index] = input.value;

    if (input.value && index < 3) {

      const inputs = this.otpInputs.toArray();

      inputs[index + 1].nativeElement.focus();
    }
  }

  onKeyDown(
    event: KeyboardEvent,
    index: number
  ): void {

    if (
      event.key === 'Backspace' &&
      !this.otp[index] &&
      index > 0
    ) {

      const inputs = this.otpInputs.toArray();

      inputs[index - 1].nativeElement.focus();
    }
  }

  verifyOtp(): void {

    this.errorMessage = '';
    this.successMessage = '';

    const enteredOtp = this.otp.join('');

    if (enteredOtp.length !== 4) {

      this.errorMessage =
        'Please enter the complete 4-digit OTP.';

      return;
    }

    setTimeout(() => {

  this.loading = false;

  this.successMessage = 'OTP verified successfully!';

  this.errorMessage = '';

  setTimeout(() => {
    this.router.navigate(['/reset-password']);
  }, 900);

  }, 
    500);
  }

  resendOtp(): void {

    this.errorMessage = '';

    this.successMessage =
      'OTP resend service will be connected with the backend.';
  }

}