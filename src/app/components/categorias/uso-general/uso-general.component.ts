import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { ProductInterface } from 'src/app/models/product';

@Component({
  selector: 'app-uso-general',
  templateUrl: './uso-general.component.html',
  styleUrls: ['./uso-general.component.css']
})
export class UsoGeneralComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  filterProducts = '';
  private products: ProductInterface[];
  ngOnInit() {
    this.getCategoria();
    console.log('Categoria', this.products);
  }


  getCategoria() {
    this.dataApi.getAllProductsCategoria6().subscribe(categoria => this.products = categoria);
  }

}