import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  standalone: true,
  imports: [FormsModule,CommonModule],
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  isLoggedIn: boolean = false;
  userName = '';

  toggleLogin() {
    if (this.userName === 'Alaa') {
      this.isLoggedIn = !this.isLoggedIn;
    } else {
      alert('Nom incorrect !');
    }
  }
}
