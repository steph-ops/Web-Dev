import { Component } from '@angular/core';
import {WelcomeComponent} from './welcome/welcome.component';
import {ArticlesComponent} from './articles/articles.component';
import {ImportanceComponent} from './importance/importance.component';
import {ProduitsComponent} from './produits/produits.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WelcomeComponent,ArticlesComponent,ImportanceComponent,ProduitsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp4';
}
