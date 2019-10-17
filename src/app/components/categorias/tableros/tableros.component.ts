import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { ProductInterface } from 'src/app/models/product';

@Component({
  selector: 'app-tableros',
  templateUrl: './tableros.component.html',
  styleUrls: ['./tableros.component.css']
})
export class TablerosComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  filterProducts = '';
  private products: ProductInterface[];
  ngOnInit() {
    this.getCategoria();
    console.log('Categoria', this.products);
  }


  getCategoria() {
    this.dataApi.getAllProductsCategoria5().subscribe(categoria => this.products = categoria);
  }

}
