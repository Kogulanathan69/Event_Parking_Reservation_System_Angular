import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  name = '';
  email = '';
  password = '';
  phone = '';

  message = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register(): void {

    const data = {
      name: this.name,
      email: this.email,
      password: this.password,
      phone: this.phone
    };

    this.authService.register(data).subscribe({

      next: (response: any) => {
        console.log('Register success:', response);

        this.message = 'Registration successful!';
        this.errorMessage = '';

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000);
      },

      error: (error: any) => {
        console.error('Register error:', error);

        this.errorMessage =
          error?.error?.message || 'Registration failed';

        this.message = '';
      }
    });
  }
}