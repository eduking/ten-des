import { Component, OnInit } from '@angular/core';

import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productHttpService:ProductHttpService) {
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
    this.productHttpService.getAll().subscribe(
    response => {
      console.log(response);    }
  ); }

  getProduct() {
    const url = "http://api.escuelajs.co/api/v1/products/5";
    this.productHttpService.getOne(1).subscribe(
    response => {
      console.log(response);    }
  ); }

  createProduct() {
    const data=  {
      title:"Taller numero 4",
      price:4,
      description:"realizado por eduardo",
      images:[],
      categoryId: 1,
    }
    this.productHttpService.store().subscribe(
    response => {
      console.log(response);    }
  ); }

  updateProduct() {
    const data=  {
      title:"cuadernos",
      price:3,
      description:"eduardo",
    }
    this.productHttpService.update(1).subscribe(
    response => {
      console.log(response);    }
  ); }


  deleteProduct() {
    this.productHttpService.destroy(1).subscribe(
    response => {
      console.log(response);
    }
  ); 
  }
}
