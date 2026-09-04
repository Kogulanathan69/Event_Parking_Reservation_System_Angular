import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';

  showPassword = false;
  loading = false;

  message = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  login(): void {

    this.message = '';
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Email and password are required.';
      return;
    }

    const data = {
      email: this.email,
      password: this.password
    };

    this.loading = true;

    this.authService.login(data).subscribe({

      next: (response: any) => {

        console.log('Login response:', response);

        if (response.token) {
          this.authService.saveToken(response.token);
        }

        if (response.userId) {
          localStorage.setItem(
            'userId',
            response.userId.toString()
          );
        }

        if (response.role) {
          localStorage.setItem(
            'role',
            response.role
          );
        }

        if (response.name) {
          localStorage.setItem(
            'userName',
            response.name
          );
        }

        this.loading = false;
        this.message = 'Login successful!';

        setTimeout(() => {
          this.router.navigate(['/']);
        }, 700);
      },

      error: (error: any) => {

        console.error('Login error:', error);

        this.loading = false;

        this.errorMessage =
          error?.error?.message ||
          'Invalid email or password.';
      }
    });
  }
}