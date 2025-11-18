import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
    standalone: true,
  imports: [FormsModule,CommonModule],
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {
  produits = [
    { nom: 'Ordinateur', prix: 3500, stock: 10 },
    { nom: 'Smartphone', prix: 1500, stock: 3 },
    { nom: 'Casque', prix: 250, stock: 0 },
    { nom: 'Souris', prix: 80, stock: 25 }
  ];
}
