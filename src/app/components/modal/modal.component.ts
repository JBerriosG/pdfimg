import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ProductInterface } from '../../models/product';
import { Categoria } from '../../models/categoria';
import { subCategoria } from '../../models/subcategoria';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  colores: Categoria[] = [
    { id: 1, name: 'AMARILLO' },
    { id: 2, name: 'ANARANJADO' },
    { id: 3, name: 'AZUL' },
    { id: 4, name: 'BLANCO' },
    { id: 5, name: 'BLANCO-ROJO' },
    { id: 6, name: 'CAFE' },
    { id: 7, name: 'NEGRO' },
    { id: 8, name: 'ROJO' },
    { id: 9, name: 'ROJO-BLANCO' },
    { id: 10, name: 'VERDE' },
    { id: 11, name: 'VERDE-AZUL' },
  ];
  constructor(private dataApi: DataApiService) { }
  @ViewChild('btnClose', { static: false }) bntclose: ElementRef;
  @Input() userUid: string;
  ngOnInit() {
  }

  onSaveProduct(productForm: NgForm): void {
    console.log('productForm.value.id', productForm.value.id);
    if (productForm.value.id == null) {
      // new
      productForm.value.userUid = this.userUid;
      this.dataApi.addProduct(productForm.value);
    } else {
      // update
      this.dataApi.updateProduct(productForm.value);
    }
    productForm.resetForm();
    this.bntclose.nativeElement.click();
  }

  close(productForm: NgForm): void {
    productForm.resetForm();
  }

}
