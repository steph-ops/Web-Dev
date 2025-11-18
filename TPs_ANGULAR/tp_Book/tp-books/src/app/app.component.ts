import { Component } from '@angular/core';
import {BookContainerComponent } from './book-container/book-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp-books';
}
