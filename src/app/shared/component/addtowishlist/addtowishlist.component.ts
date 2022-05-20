import { Component, Input, OnInit } from '@angular/core';
import { BookList } from '../book-cards/books';

@Component({
  selector: 'app-addtowishlist',
  templateUrl: './addtowishlist.component.html',
  styleUrls: ['./addtowishlist.component.scss']
})
export class AddtowishlistComponent implements OnInit {
  @Input()
  bookId: number | undefined;

  @Input()
  showButton = false;

  public toggle: boolean | undefined;
  public buttonText: string | undefined;
  constructor() {}

  ngOnInit(): void {}

  setFavourite(bookData: BookList[]) {
    const favBook = bookData.find((f) => f.bookId === this.bookId);

    if (favBook) {
      this.toggle = true;
    } else {
      this.toggle = false;
    }
  }

  setButtonText() {
    if (this.toggle) {
      this.buttonText = 'Remove from Wishlist';
    } else {
      this.buttonText = 'Add to Wishlist';
    }
  }

  toggleValue() {
    this.toggle = !this.toggle;
    this.setButtonText();
  }
}
