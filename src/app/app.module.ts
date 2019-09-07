// ============== angular modules =============
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// ============ app components ===========
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SingleItemComponent } from './single-item/single-item.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// ================= services ===============
import { ProductsService } from './products.service';
import { CommonFuncService } from './common-func.service';

//=============== pipe ===================
import { SearchPipe } from './search.pipe';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'singleitem/:name', component: SingleItemComponent },
  { path: 'userinfo', component: UserInfoComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SingleItemComponent,
    UserInfoComponent,
    CartComponent,
    SearchPipe,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    ProductsService,
    CommonFuncService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
