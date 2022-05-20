import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookstoreService } from 'src/app/service/bookstore.service';
import { BookList } from 'src/app/shared/component/book-cards/books';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BookListComponent implements OnInit {
  public bookList!: BookList[];
  constructor(
    private bookService: BookstoreService
  ) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.loadAllBooks().subscribe({
      next: (resp: BookList[]) => {
      
        this.bookList = resp;
        console.log('All books:', this.bookList);
      },
      error: (err: any) => {
        console.log('Errors :', err);
      },
      complete: () => {
        console.log('request completed');
      },
    });
  }
}
