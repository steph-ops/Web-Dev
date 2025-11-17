import { Component } from '@angular/core';
import { BienvenueComponent } from './components/bienvenue/bienvenue.component';
import { ProduitComponent } from './components/produit/produit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BienvenueComponent,ProduitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestion-produits';
  gererAjoutAuPanier(produit: string): void {
    console.log(produit);
  }
}
