import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../book.model';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  @Input() categories: string[] = [];
  @Input() bookToEdit: Book | null = null;
  @Output() submitBook = new EventEmitter<Book>();

  book: Book = new Book();

  ngOnChanges() {
    if (this.bookToEdit) {
      this.book = { ...this.bookToEdit };
    } else {
      this.book = new Book();
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submitBook.emit(this.book);
      form.resetForm();
      this.book = new Book();
    }
  }
}
