import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, Category, ProductDTO } from './enum/product.enum';
import { Observable, throwError } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  getProduct(): Observable<any> {
    return this.http.get<any>(this.url + 'product');
  }

  getProductByType(id: number): Observable<any> {
    return this.http.get<any>(this.url + `product/type/${id}`);
  }

  createProduct(req: FormGroup<ProductDTO>): Observable<any> {
    return this.http.post<Product>(this.url + 'product', req.value);
  }

  editProduct(id: number, req: Product): Observable<any> {
    return this.http.put<Product>(this.url + `product/${id}`, req);
  }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url + 'category');
  }

  createCategory(category: FormGroup<any>): Observable<any> {
    return this.http.post(this.url + 'category', category.value);
  }
}
