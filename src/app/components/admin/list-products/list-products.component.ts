import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ProductInterface } from '../../../models/product';
import {NgForm} from '@angular/forms';

import {AuthService} from '../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface} from '../../../models/user';
import { auth } from 'firebase';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private dataApi: DataApiService, private authService: AuthService) { }
  private products: ProductInterface[];
  private isAdmin: any = null;
  public userUid: string = null;

  pageActual:number = 1;
  ngOnInit() {
    this.getListProducts();
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles);
          this.isAdmin = this.isAdmin.hasOwnProperty('admin');
        });
      }
    });
  }

  getListProducts() {
    this.dataApi.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }
  getListShoopingCar() {
    this.dataApi.getShoppingCar().subscribe(products => {
      this.products = products;
    });
  }

  onDeleteProduct(idProduct: string): void {
    console.log('Delete Product', idProduct);
    const confirmacion = confirm('Are you sure?');
    if (confirmacion) {
      this.dataApi.deleteProduct(idProduct);
    }
  }

  onPreUpdateProduct(product: ProductInterface) {
    console.log('Product', product);
    this.dataApi.selectedProduct = Object.assign({}, product);
  }
}
