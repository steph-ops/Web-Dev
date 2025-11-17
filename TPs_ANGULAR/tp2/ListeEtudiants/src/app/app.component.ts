import { Component } from '@angular/core';
import { EtudiantComponent } from './etudiant/etudiant.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EtudiantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyClass Will be Angular Heroes';

}
