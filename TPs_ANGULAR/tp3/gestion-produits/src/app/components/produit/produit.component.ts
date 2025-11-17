
import { FormsModule } from '@angular/forms';
import { Component, Output, EventEmitter,Input  } from '@angular/core';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  @Input() nomProduit: string = '';
  imageUrl: string = "assets/images/produit.jpg";

  afficherAlerte(): void {
    alert("Produit ajouté au panier");
  }

  enStock: boolean = true;
  
  toggleStock(): void {
    this.enStock = !this.enStock;
  }
   @Output() ajouterAuPanier = new EventEmitter<string>();
  
  ajouterProduit(): void {
    this.ajouterAuPanier.emit("Produit ajouté");
  }
}
