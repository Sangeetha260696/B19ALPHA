import { Component, Input, OnInit } from '@angular/core';
import { AddcartService } from 'src/app/service/addcart.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.scss']
})
export class AddtocartComponent implements OnInit {
  @Input()
  bookId:any;
    userId:any;
   
    
    constructor(private addcartservice:AddcartService) {
      
    }
  
    ngOnInit(): void {}
  
    moveToCart() {
      this.addcartservice.addBookToCart(this.userId, this.bookId).subscribe( );
        alert('item moved to cart');
      
    }
  }  
