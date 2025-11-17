import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ProfilComponent } from './profil/profil.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UtilisateurComponent, FormsModule,ProfilComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp2';
}
