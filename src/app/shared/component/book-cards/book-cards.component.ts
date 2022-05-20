import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookList } from './books';

@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.scss'],
})
export class BookCardsComponent implements OnInit {
  @Input()
  books!:BookList;
  

  isActive = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewBookInfo(id: number): void{
   
  }
}
