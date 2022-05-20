import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, EMPTY, Observable } from 'rxjs';
import { BookstoreService } from 'src/app/service/bookstore.service';
import { BookList } from 'src/app/shared/component/book-cards/books';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  bookId;
  BookDetails$!: Observable<BookList | null | undefined>;

  constructor(
    private bookService: BookstoreService,
    private route: ActivatedRoute
  ) {
    this.bookId = this.route.snapshot.paramMap.get('id');
    console.log(this.bookId)
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.bookId = params['id'];
      this.getBookById();
    });
  }
    
  getBookById() {
    this.BookDetails$ = this.bookService.getbookById(Number(this.bookId)).pipe(
      catchError((error) => {
        console.log('Error ocurred while fetching book data : ', error);
        return EMPTY;
      })
    );
  }
}
