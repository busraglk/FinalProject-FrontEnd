import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl= "https://localhost:44328/api/products/getall"
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
    }
  }

