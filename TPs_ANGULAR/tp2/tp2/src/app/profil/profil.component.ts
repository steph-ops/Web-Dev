import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  utilisateur = { prenom: '', age: 0 };

}
