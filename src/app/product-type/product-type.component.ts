import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products, Product } from '../products';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit{
  products: Product[] | undefined;
  types = this.getType(products);

  constructor(
    private route: ActivatedRoute
  ){ }
  
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productTypeFromRoute = String(routeParams.get('productType'));
  }

  private getType(products: Product[]): string[] {
    let types: string[] = [];
    for(let product of products){
      if(!types.includes(product.type))
        types.push(product.type);
    }
    return types;
  }



}
