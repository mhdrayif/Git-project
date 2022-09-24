import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  productDetails =[
    {
      id:1,
      productName:"Vegetable",
      productDetails:"Farm-Fresh Organic.",
      productPrice:2,
      productImg: "https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHx2ZWdldGFsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },

    {
      id:2,
      productName:"Meat",
      productDetails:"Farm-Fresh Organic.",
      productPrice:2,
      productImg:"https://images.unsplash.com/photo-1623000576459-8b6db331a22a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },

    {
      id:3,
      productName:"SeaFood",
      productDetails:"Fresh-Local Catch.",
      productPrice:10,
      productImg:"https://images.unsplash.com/photo-1498654200943-1088dd4438ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },

    {
    id:4,
      productName:"Grocery",
      productDetails:"All Products.",
      productPrice:2,
      productImg:"https://images.unsplash.com/photo-1581264669997-3f222f331aaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    }
  ]

}
