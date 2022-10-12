import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' // bu kod sayasinde farklı bir yerde yazılan API çalıştırılabiliyor.
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44361/api/products/getall';

  constructor(private httpClient:HttpClient) { }


  getProducts():Observable<ProductResponseModel>{
    
   return this.httpClient.get<ProductResponseModel>(this.apiUrl);
    
      }
}
