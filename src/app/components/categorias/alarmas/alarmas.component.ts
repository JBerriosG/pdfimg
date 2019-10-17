import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { ProductInterface } from 'src/app/models/product';


@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.component.html',
  styleUrls: ['./alarmas.component.css']
})
export class AlarmasComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  filterProducts = '';
  private products: ProductInterface[];
  ngOnInit() {
    this.getCategoria();
    console.log('Categoria', this.products);
  }


  getCategoria() {
    this.dataApi.getAllProductsCategoria4().subscribe(categoria => this.products = categoria);
  }

}
