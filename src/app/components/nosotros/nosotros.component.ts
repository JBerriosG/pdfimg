import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ProductInterface } from 'src/app/models/product';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  filterProducts = '';
  private products: ProductInterface[];
  ngOnInit() {
    this.getNosotros();
    console.log('OFERTAS', this.products);
  }


  getNosotros() {
    this.dataApi.getAllProductsNosotros().subscribe(nosotros => this.products = nosotros);
  }

}