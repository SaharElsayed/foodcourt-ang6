import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// ============= service ==============
import { ProductsService } from '../products.service';
import { CommonFuncService } from '../common-func.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productData: Array<any>;
  toCartData: Array<any>;
  search;

  model = {
    right: true
  };

  constructor(private query: ProductsService,
    private toSingleView: Router,
    private common: CommonFuncService) {

    this.productData = [];
    this.getProductData();
    this.toCartData = [];
  }

  //============ get data from json file ==========
  getProductData(): void {
    let path: string = './assets/productList.json';
    this.query.getData(path).subscribe(
      res => {
        console.log(res);
        this.productData = res;
      },
      err => { console.log(err); }
    );
  }

  //============ function when click add to cart btn ===========
  addToCart(id): void {
    this.checkProduct(id);
  }

  //============ to add data to cart array =========
  checkProduct(id): void {
    for (let product of this.productData) {
      if (product.id == id) {
        this.toCartData.push(product);
      }
    }
  }

  ngOnInit() {
    //============ adding data to currentMessage ========    
    this.common.currentMessage.subscribe(data => this.toCartData = data);
  }

}
