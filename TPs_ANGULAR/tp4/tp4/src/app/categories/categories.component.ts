import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  utilisateur = {
    nom: 'Alaa',
    categorie: 'admin'   // changer pour tester: 'guest', 'user', 'moderator', etc.
  };
}
