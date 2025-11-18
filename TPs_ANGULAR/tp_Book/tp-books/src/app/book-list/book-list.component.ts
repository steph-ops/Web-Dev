import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book.model';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  @Input() books: Book[] = [];
  @Output() edit = new EventEmitter<Book>();
  @Output() delete = new EventEmitter<number>();
  trackById(index: number, book: Book): number {
    return book.id;
  }

}
