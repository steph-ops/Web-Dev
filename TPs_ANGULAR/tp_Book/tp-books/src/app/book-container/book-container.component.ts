import { Component } from '@angular/core';
import { Book } from '../book.model';
import {BookFormComponent} from '../book-form/book-form.component';
import {BookListComponent} from '../book-list/book-list.component';

@Component({
  selector: 'app-book-container',
  standalone: true,
  imports: [BookFormComponent,BookListComponent],
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.css']
})
export class BookContainerComponent {
  books: Book[] = [
    { id: 1, title: '1984', author: 'George Orwell', publisherEmail: 'orwell@example.com', publisherPhone: '12345678', releaseDate: '1949-06-08', category: 'Roman', isAvailable: true, stock: 5 },
    { id: 2, title: 'Angular Basics', author: 'John Doe', publisherEmail: 'john@example.com', releaseDate: '2022-01-01', category: 'Informatique', isAvailable: true, stock: 10 }
  ];

  categories: string[] = ['Roman', 'Science', 'Histoire', 'Informatique', 'Art', 'Autres'];

  selectedBook: Book | null = null;

  addBook(book: Book) {
    if (!book.id) {
      book.id = this.books.length ? Math.max(...this.books.map(b => b.id)) + 1 : 1;
      this.books.push(book);
    } else {
      const index = this.books.findIndex(b => b.id === book.id);
      if (index !== -1) this.books[index] = book;
    }
    this.selectedBook = null;
  }

  editBook(book: Book) {
    this.selectedBook = { ...book }; // copie pour préremplir le formulaire
  }

  deleteBook(id: number) {
    this.books = this.books.filter(b => b.id !== id);
  }
}
