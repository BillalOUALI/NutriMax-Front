import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false,
 // imports: [FormsModule] // Ensure FormsModule is imported here
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    console.log('onSubmit method called'); // Add this line
    this.authService.login(this.username, this.password).subscribe();
  }
}
