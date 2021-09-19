import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ShoppingCart } from "@app/home/models/shoppingCart";
import { environment } from "@environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { getCookie, setCookie } from "src/helper/Cookie";

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {
    public shoppingCartItems: BehaviorSubject<ShoppingCart[]>;
    public shoppingCart: Observable<ShoppingCart[]>;

    constructor(private http: HttpClient) {
        this.shoppingCartItems = new BehaviorSubject<ShoppingCart[]>([]);;
        this.shoppingCart = this.shoppingCartItems.asObservable();
    }

    getCart() {
        return this.shoppingCartItems;
    }

    getShoppingCart() {
        // TODO: Pass email via cookies, by passing withCredentials it enabling CROS. So will fix later
        return this.http.get<any>(`${environment.apiUrl}/api/v1/cart/GetShoppingCart?emailId=${getCookie("auth")}`)
            .pipe(map(items => {
                this.shoppingCartItems.next(items);
                return items;
            }));
    }

    updateShoppingCart(pid, qty) {

        // TODO: Pass email via cookies, by passing withCredentials it enabling CROS. So will fix later
        return this.http.post<any>(`${environment.apiUrl}/api/v1/cart/UpdateShoppingCart`, { productId: pid, quantity: qty, emailId: getCookie("auth") })
            .pipe(map(items => {
                this.shoppingCartItems.next(items);
                return items;
            }));
    }
}
