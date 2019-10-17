import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { ProductInterface } from 'src/app/models/product';

@Component({
  selector: 'app-fuentes',
  templateUrl: './fuentes.component.html',
  styleUrls: ['./fuentes.component.css']
})
export class FuentesComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  filterProducts = '';
  private products: ProductInterface[];
  ngOnInit() {
    this.getCategoria();
    console.log('Categoria', this.products);
  }


  getCategoria() {
    this.dataApi.getAllProductsCategoria2().subscribe(categoria => this.products = categoria);
  }

}

