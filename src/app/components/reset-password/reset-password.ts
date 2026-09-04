import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css'
})
export class ResetPassword {

  newPassword = '';
  confirmPassword = '';

  showNewPassword = false;
  showConfirmPassword = false;

  loading = false;
  message = '';
  errorMessage = '';

  constructor(private router: Router) {}

  toggleNewPassword(): void {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  resetPassword(): void {

    this.message = '';
    this.errorMessage = '';

    if (!this.newPassword || !this.confirmPassword) {
      this.errorMessage = 'Please fill in all password fields.';
      return;
    }

    if (this.newPassword.length < 8) {
      this.errorMessage =
        'Password must contain at least 8 characters.';
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage =
        'New password and confirm password do not match.';
      return;
    }

    this.loading = true;

    /*
      Backend API later connect pannuvom.

      Example:
      POST /api/Auth/reset-password

      const data = {
        email: localStorage.getItem('resetEmail'),
        newPassword: this.newPassword
      };
    */

    setTimeout(() => {

      this.loading = false;

      this.message =
        'Password reset successfully!';

      localStorage.removeItem('resetEmail');

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 900);

    }, 700);
  }
}