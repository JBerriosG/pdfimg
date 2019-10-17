import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { ProductInterface } from '../models/product';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
const fs = require('fs');
// import fs from 'fs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  
  constructor( private afs: AngularFirestore ) { }
  private productsCollection: AngularFirestoreCollection<ProductInterface>;
  private products: Observable<ProductInterface[]>;
  private productDoc: AngularFirestoreDocument<ProductInterface>;
  private product: Observable<ProductInterface>;
  public selectedProduct: ProductInterface = {
    id: null
  };

  getAllProducts() {
    this.productsCollection = this.afs.collection<ProductInterface>('products');
    return this.products = this.productsCollection.snapshotChanges()
    .pipe( map ( changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as ProductInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }
  getShoppingCar() {
    this.productsCollection = this.afs.collection<ProductInterface>('shoppingcar');
    return this.products = this.productsCollection.snapshotChanges()
    .pipe( map ( changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as ProductInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getAllProductsNosotros() {
    this.productsCollection = this.afs.collection('products', ref => ref.where('oferta', '==', '1'));
    return this.products = this.productsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as ProductInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
  getAllProductsCategoria1() {
    this.productsCollection = this.afs.collection('products', ref => ref.where('categoria', '==', 'Foto-Sensores'));
    return this.products = this.productsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as ProductInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
  getAllProductsCategoria2() {
    this.productsCollection = this.afs.collection('products', ref => ref.where('categoria', '==', 'Fuentes de Poder'));
    return this.products = this.productsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as ProductInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
  getAllProductsCategoria3() {
    this.productsCollection = this.afs.collection('products', ref => ref.where('categoria', '==', 'LED'));
    return this.products = this.productsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as ProductInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
  getAllProductsCategoria4() {
    this.productsCollection = this.afs.collection('products', ref => ref.where('categoria', '==', 'Alarmas'));
    return this.products = this.productsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as ProductInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
  getAllProductsCategoria5() {
    this.productsCollection = this.afs.collection('products', ref => ref.where('categoria', '==', 'Tableros'));
    return this.products = this.productsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as ProductInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
  getAllProductsCategoria6() {
    this.productsCollection = this.afs.collection('products', ref => ref.where('categoria', '==', 'Uso General'));
    return this.products = this.productsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as ProductInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
  getAllProductsCategoria7() {
    this.productsCollection = this.afs.collection('products', ref => ref.where('categoria', '==', 'Tecnologia'));
    return this.products = this.productsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as ProductInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
  getOneProduct(idProduct: string) {
    this.productDoc = this.afs.doc<ProductInterface>(`products/${idProduct}`);
    return this.product = this.productDoc.snapshotChanges().pipe( map (action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as ProductInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }
  addProduct(product: ProductInterface): void {
    this.productsCollection.add(product);
  }
  updateProduct(product: ProductInterface): void {
    const idProduct = product.id;
    this.productDoc = this.afs.doc<ProductInterface>(`products/${idProduct}`);
    this.productDoc.update(product);
  }
  deleteProduct(idProduct: string): void {
    this.productDoc = this.afs.doc<ProductInterface>(`products/${idProduct}`);
    this.productDoc.delete();
  }

  copiarPegar() {
    fs.unlinkSync('./prueba.txt');
  }

}
