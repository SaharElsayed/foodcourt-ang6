import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

// ============= service ==============
import { ProductsService } from '../products.service';
import { CommonFuncService } from '../common-func.service';


@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

  singleName: string;
  singleData: object;
  productData: Array<any>;
  //===== input quantity =======  
  num: number;
  toCartData: Array<any>;

  constructor(private active: ActivatedRoute,
    private query: ProductsService,
    private common: CommonFuncService) {

    this.singleData = {};
    this.productData = [];
    this.getProductData();
    this.num = 1;
    this.toCartData = [];

    // ========= accessing name comes from url ===========
    this.active.params.subscribe(
      params => this.singleName = (params.name).replace(/-/g, ' ')
    );
  }

  //============ get data from json file ==========
  getProductData(): void {
    let path: string = '../../assets/productList.json';
    this.query.getData(path).subscribe(
      res => {
        this.productData = res;
        this.checkProduct();
      },
      err => { console.log(err); }
    );
  }

  // ========== accessing single product from all products ========
  checkProduct(): void {
    for (let product of this.productData) {
      if (product.name == this.singleName) {
        this.singleData = product;
      }
    }
  }

  //=========== function when click add to cart btn ========= 
  addToCart(id): void {
    this.checkProducts(id);
  }

  //============ to add data to cart array =========
  checkProducts(id): void {
    for (let product of this.productData) {
      if (product.id == id) {
        this.toCartData.push(product);
        product.qty = this.num;
      }
    }
  }

  ngOnInit() {
    //============ adding data to currentMessage ============
    this.common.currentMessage.subscribe(data => this.toCartData = data);
  }
}
