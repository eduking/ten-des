import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private httpClient:HttpClient) {
   }

  ngOnInit(): void {
    this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }

  getProducts() {
    const url = "http://api.escuelajs.co/api/v1/products";
    this.httpClient.get(url).subscribe(
    response => {
      console.log(response);    }
  ); }

  getProduct() {
    const url = "http://api.escuelajs.co/api/v1/products/5";
    this.httpClient.get(url).subscribe(
    response => {
      console.log(response);    }
  ); }

  createProduct() {
    const data=  {
      title:"Taller numero 4",
      price:4,
      description:"realizado por Ronnald Haro",
      images:[],
      categoryId: 1,
    }
    const url = "http://api.escuelajs.co/api/v1/products";
    this.httpClient.post(url, data).subscribe(
    response => {
      console.log(response);    }
  ); }

  updateProduct() {
    const data=  {
      title:"cuadernos",
      price:3,
      description:"utiles Ronnald Haro",
    }
    const url = "http://api.escuelajs.co/api/v1/products/5";
    this.httpClient.put(url, data).subscribe(
    response => {
      console.log(response);    }
  ); }


  deleteProduct() {
    this.httpClient.delete("http://api.escuelajs.co/api/v1/products/5").subscribe(
    response => {
      console.log(response);    }
  ); }
  ; }
