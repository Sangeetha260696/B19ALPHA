import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddcartService {

  
  baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = '/api/shoppingcart/';
  }

  addBookToCart(userId: number, bookId: number):Observable<any> {

    
    return this.http.post<number>(this.baseURL + `addToCart/${userId}/${bookId}`, { });
  }
}
