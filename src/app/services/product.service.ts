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

    constructor(private http: HttpClient) {
        this.productsList = new BehaviorSubject<Product[]>([]);;
        this.products = this.productsList.asObservable();
    }

    getProducts() {
        return this.productsList;
    }

    searchByCataoger(catagoeryTerm: String) {
        return this.http.get<any>(`${environment.apiUrl}/api/v1/search/catergory?catergory=${catagoeryTerm}`)
            .pipe(map(products => {
                this.productsList.next(products);
                return products;
            }));
    }
}


