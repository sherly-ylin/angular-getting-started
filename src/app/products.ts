export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  type: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    type: "Phone"
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    type: "Phone"
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    type: "Phone"
  },
  {
    id: 4,
    name: 'Laptop Pro',
    price: 1699,
    description: '16-inch laptop with excellent performance',
    type: "Laptop"
  },
  {
    id: 5,
    name: 'Laptop Standard',
    price: 1499,
    description: '16-inch laptop with good performance',
    type: "Laptop"
  }, 
  {
    id: 6,
    name: 'Laptop Light',
    price: 1299,
    description: '14-inch laptop with good performance',
    type: "Laptop"
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/