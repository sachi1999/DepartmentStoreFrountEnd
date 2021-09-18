import { Injectable } from "@angular/core";
import { product } from "@app/home/models/product";

@Injectable({
    providedIn: 'root'
})
export class ProductService{

    products:product[]=[
        new product(1,'product 1','-------descriptuion-------',100),
        new product(2,'product 2','-------descriptuion-------',150),
        new product(3,'product 3','-------descriptuion-------',190),
        new product(4,'product 4','-------descriptuion-------',120),
        new product(5,'product 5','-------descriptuion-------',10),
        new product(6,'product 6','-------descriptuion-------',167),
        new product(6,'product 6','-------descriptuion-------',167),
        
    ]
    constructor()
    {
    }

    getProducts():product[]{
        return this.products
    }
    }


