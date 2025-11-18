import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
    standalone: true,
  imports: [FormsModule,CommonModule],
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles = [
    { titre: 'Laptop Asus', contenu: 'Article 1' },
    { titre: 'Laptop Gaming', contenu: 'Article 2' }
  ];
  
  newTitle = '';
  newContent = '';

  addArticle() {
    if (this.newTitle && this.newContent) {
      this.articles.push({
        titre: this.newTitle,
        contenu: this.newContent
      });
      this.newTitle = '';
      this.newContent = '';
    }
  }
}
