import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './enum/product.enum';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  getProduct(): Observable<any> {
    return this.http.get(this.url + 'product');
  }
}
