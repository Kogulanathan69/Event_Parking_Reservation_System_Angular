import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './change-password.html',
  styleUrl: './change-password.css'
})
export class ChangePassword {

  currentPassword = '';
  newPassword = '';
  confirmPassword = '';

  showCurrentPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;

  loading = false;
  message = '';
  errorMessage = '';

  constructor(private router: Router) {}

  toggleCurrentPassword(): void {
    this.showCurrentPassword = !this.showCurrentPassword;
  }

  toggleNewPassword(): void {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  changePassword(): void {

    this.message = '';
    this.errorMessage = '';

    if (
      !this.currentPassword ||
      !this.newPassword ||
      !this.confirmPassword
    ) {
      this.errorMessage = 'Please fill in all password fields.';
      return;
    }

    if (this.newPassword.length < 8) {
      this.errorMessage =
        'New password must contain at least 8 characters.';
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage =
        'New password and confirm password do not match.';
      return;
    }

    if (this.currentPassword === this.newPassword) {
      this.errorMessage =
        'New password must be different from current password.';
      return;
    }

    this.loading = true;

    /*
      Backend API later connect pannuvom.

      Example:
      POST /api/Auth/change-password

      const data = {
        currentPassword: this.currentPassword,
        newPassword: this.newPassword
      };
    */

    setTimeout(() => {

      this.loading = false;

      this.message =
        'Password changed successfully!';

      this.currentPassword = '';
      this.newPassword = '';
      this.confirmPassword = '';

      setTimeout(() => {
        this.router.navigate(['/']);
      }, 900);

    }, 700);
  }
}