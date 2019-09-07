import { Component, OnInit } from '@angular/core';
import { CommonFuncService } from '../common-func.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartData: Array<any>;

  constructor(private common: CommonFuncService) {
  }

  ngOnInit() {
    //=========== accessing cart data from cart component through service ======
    this.common.currentMessage.subscribe(data => this.cartData = data);
  }

}
