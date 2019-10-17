import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { ProductInterface } from 'src/app/models/product';


@Component({
  selector: 'app-foto-sensores',
  templateUrl: './foto-sensores.component.html',
  styleUrls: ['./foto-sensores.component.css']
})
export class FotoSensoresComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  filterProducts = '';
  private products: ProductInterface[];
  ngOnInit() {
    this.getCategoria();
    console.log('Categoria', this.products);
  }


  getCategoria() {
    this.dataApi.getAllProductsCategoria1().subscribe(categoria => this.products = categoria);
  }

}
