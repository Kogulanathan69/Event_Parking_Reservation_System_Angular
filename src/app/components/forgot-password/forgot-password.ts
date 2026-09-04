import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css'
})
export class ForgotPassword {

  email = '';
  loading = false;

  message = '';
  errorMessage = '';

  constructor(private router: Router) {}

  submit(): void {

    this.message = '';
    this.errorMessage = '';

    if (!this.email) {
      this.errorMessage = 'Please enter your email address.';
      return;
    }

    this.loading = true;

    /*
      Backend API later inga connect pannuvom.

      Example:
      POST /api/Auth/forgot-password
    */

    setTimeout(() => {

      this.loading = false;

      this.message =
        'Verification code sent successfully.';

      localStorage.setItem(
        'resetEmail',
        this.email
      );

      setTimeout(() => {
        this.router.navigate(['/otp-verification']);
      }, 700);

    }, 600);
  }
}