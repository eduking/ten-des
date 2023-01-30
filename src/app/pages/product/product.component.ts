import { Component, OnInit } from '@angular/core';
import { ProductModel, UpdateProductDto } from 'src/app/entities/product.model';
import { ProductHttpService } from 'src/app/services/product-http.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: ProductModel[]=[];
  selectedProduct:UpdateProductDto={};

  constructor(private productHttpService:ProductHttpService) 
  {
    this.initProduct();
   }

initProduct(){
  this.selectedProduct ={title:"",price:0,description:""};
}

  ngOnInit(): void {
    this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();

    }
    data = {
      id: this.selectedProduct.id ? this.selectedProduct.id : 0,
      title: this.selectedProduct.title,
      description: this.selectedProduct.description,
      images: this.selectedProduct.images,
      price: this.selectedProduct.price,
      categoryId: this.selectedProduct.categoryId
      };
      
  getProducts() {
    this.productHttpService.getAll().subscribe(
    response => {
      this.products = response;
      console.log(response);    }
  ); 
}

  getProduct() {
    this.productHttpService.getOne(2).subscribe(
      response => {
      console.log(response);   
      });
 }
// currentEntity: ProductModel=
// {
// id:0,
// title:"",
// price:0,
// description:"",
// images:[],
// category:{id:0,
//           title:"",
//             description:""},
// };

//  create():void {
//   this.productHttpService.store()
//   .subscribe(
//     () => {
//       this.currentEntity =
//       {
//         id:0,
//         title:"",
//         price:0,
//         description:"",
//         images:[],
//         category:{id:0,
//           title:"",
//             description:""},
        
//       };
//       this.router.navigate(["/login"]) 
//     }
//   )
// }



  createProduct() {
    const data=  {
      title:"Taller numero 4",
      price:4,
      description:"realizado por eduardo",
      images:[
     'https://marketing4ecommerce.net/wp-content/uploads/2018/10/tipos-de-im%C3%A1genes-1280x720.jpg'
      ],
      categoryId: 1,
    }
    this.productHttpService.store(data).subscribe(
    response => {
      console.log(response);    }
  );
 }
 editProduct(product:ProductModel){
  this.selectedProduct = product;

 }

  // updateProduct() {
  //   const data=  {
      
  //     title:"cuadernos",
  //     price:3,
  //     description:"cuadernitos",
  //   };
  //   this.productHttpService.update(226,data).subscribe(
  //   response => {
  //     console.log(response);    }
  // ); }

  updateProduct() {
    return this.productHttpService.update(this.data, 
      this.selectedProduct.id ? this.selectedProduct.id : 0 ).subscribe(
        (response) => {
      console.log(response);
    });
  }

  deleteProduct(id: ProductModel['id']) {
    this.productHttpService.destroy(id).subscribe(
    (response) => {
      this.products= this.products.filter(product=> product.id !=id);
      console.log(response);
    }
  ); 
  }
}
