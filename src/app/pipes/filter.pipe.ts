import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg == '' || arg.length < 3) return value;
    const resultadoProducts = [];
    for(const product of value){
      if(product.subCategoria.toLowerCase().indexOf(arg.toLowerCase()) > -1 || product.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultadoProducts.push(product);
      }
    }
    return resultadoProducts;
  }

}