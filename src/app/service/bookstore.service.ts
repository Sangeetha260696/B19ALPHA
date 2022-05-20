import { Injectable } from '@angular/core';
import { map, Observable, shareReplay, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BookList } from '../shared/component/book-cards/books';

@Injectable({
  providedIn: 'root',
})
export class BookstoreService {

  
  constructor(private http: HttpClient) {}
  books$ = this.loadAllBooks().pipe(shareReplay(1));

  loadAllBooks(): Observable<BookList[]> {
    
    return this.http.get<BookList[]>("https://bookcart.azurewebsites.net/api/book/"); 
  }

  getbookById(id: number) {
    return this.books$.pipe(map((bId) => bId.find((b) => b.bookId === id)));
  }

  showSimilarItems(bookId: number) {
    
    return this.http.get<BookList[]>("https://bookcart.azurewebsites.net/api/book/GetSimilarBooks/" + bookId);
  }
  
}