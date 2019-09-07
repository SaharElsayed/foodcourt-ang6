import { Component, OnInit } from '@angular/core';
import { CommonFuncService } from '../common-func.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  fromCartData: Array<any>;
  closeResult: string;
  totalAmount: number;

  constructor(private common: CommonFuncService,
    private modalService: NgbModal) {
    this.totalAmount = 0;
  }

  //=============== Modal functions ===============
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.fromCartData = [];
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  //============ to delete item from cart ==============
  deleteItem(id): void {
    for (let product of this.fromCartData) {
      if (product.id == id) {
        let index = this.fromCartData.indexOf(product);
        this.fromCartData.splice(index, 1);
        this.totalAmount -= product.price;
      }
    }
  }
  //========= to calculate total amount ===========
  calcTotal(): void {
    for (let item of this.fromCartData) {
      this.totalAmount += item.price;
    }
  }

  ngOnInit() {
    //============ accessing data from another component through service ========
    this.common.currentMessage.subscribe(data => this.fromCartData = data);
    this.calcTotal();
  }
}
