import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { ProductInterface } from 'src/app/models/product';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  filterProducts = '';
  private products: ProductInterface[];
  ngOnInit() {
    this.getCategoria();
    console.log('Categoria', this.products);
  }


  getCategoria() {
    this.dataApi.getAllProductsCategoria7().subscribe(categoria => this.products = categoria);
  }

}

