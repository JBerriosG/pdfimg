import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { ProductInterface } from 'src/app/models/product';


@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.css']
})
export class LedComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  filterProducts = '';
  private products: ProductInterface[];
  ngOnInit() {
    this.getCategoria();
    console.log('Categoria', this.products);
  }


  getCategoria() {
    this.dataApi.getAllProductsCategoria3().subscribe(categoria => this.products = categoria);
  }

}
