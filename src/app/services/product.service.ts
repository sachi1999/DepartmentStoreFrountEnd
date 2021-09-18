import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "@app/home/models/product";
import { environment } from "@environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    public productsList: BehaviorSubject<Product[]>;
    public products: Observable<Product[]>;
    // products:Product[]=[
    //     new Product(1,'product 1','-------descriptuion-------',100),
    //     new Product(2,'product 2','-------descriptuion-------',150),
    //     new Product(3,'product 3','-------descriptuion-------',190),
    //     new Product(4,'product 4','-------descriptuion-------',120),
    //     new Product(5,'product 5','-------descriptuion-------',10),
    //     new Product(6,'product 6','-------descriptuion-------',167),
    //     new Product(6,'product 6','-------descriptuion-------',167),

    // ]

    constructor(private http: HttpClient) {
        this.productsList = new BehaviorSubject<Product[]>([]);;
        this.products = this.productsList.asObservable();
    }

    getProducts(): Product[] {
        return this.productsList.value;
    }

    searchByCataoger(catagoeryTerm: string) {
        return this.http.get<any>(`${environment.apiUrl}/api/v1/search/catergory?catergory=${catagoeryTerm}`)
        .pipe(map(products => {
            this.productsList.next(products);
            return products;
        }));
    }
}


