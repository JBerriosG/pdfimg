import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
// import fs from 'fs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  public products = [];
  public product = '';
  public category: boolean = false;
  public archivo = '';

  pageActual: number = 1;
  ngOnInit() {
    this.dataApi.getAllProducts().subscribe(products => {
      console.log('Products', products);
      this.products = products;

    });
    this.dataApi.copiarPegar();
    
  }

  copiarPegar(idProduct: string) {
    console.log('ID: ', idProduct);
    this.dataApi.getOneProduct(idProduct).subscribe(product => {
      const archivo = product.archivoPDF;
      console.log('ARCHIVO: ', archivo);
      // this.dataApi.copyFile(archivo)
      this.dataApi.copiarPegar();
    });

  }
}
