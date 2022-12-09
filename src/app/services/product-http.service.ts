import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {
  readonly API_URL: string ='http://api.escuelajs.co/api/v1/products'
  constructor(private  httpClient: HttpClient){}

    getAll() {
      const url =  `${this.API_URL}`;
      return this.httpClient.get(url);
     }
  
    getOne(id:number) {
      const url =  `${this.API_URL}/${id}`;
      return this.httpClient.get(url);
     }
  
    store() {
      const data=  {
        title:"Taller numero 4",
        price:4,
        description:"realizado por eduardo",
        images:[],
        categoryId: 1,
      }
      const url =  `${this.API_URL}`;
      return this.httpClient.post(url, data)}
  
    update(id:number) {
      const data=  {
        title:"cuadernos",
        price:3,
        description:"utiles eduardo",
      }
      const url = "http://api.escuelajs.co/api/v1/products/5";
      return this.httpClient.put(url, data);}
  
  
    destroy(id:number) {
      const url =  `${this.API_URL}/${id}`;
      return this.httpClient.delete(url);
     }
}
