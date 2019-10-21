import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  url = 'http://127.0.0.1:8000/api'
  // url = 'https://teststrapp.000webhostapp.com/api'

  constructor( private http: HttpClient) { }

  getProductsByCategory(id) {
    return this.http.get(`${this.url}/categories/${id}`);
  }

  getCategories() {
    return this.http.get(`${this.url}/categories`);
  }

  login(user) {
    return this.http.post(`${this.url}/login`, {user});
  }

}
