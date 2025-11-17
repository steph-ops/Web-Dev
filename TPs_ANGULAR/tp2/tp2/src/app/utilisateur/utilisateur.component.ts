import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-utilisateur',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})
export class UtilisateurComponent {
  nom = 'Ala Eddine';

}
