export interface ShoppingCart {
    lineItem: LineItem;
    product: Product;
  }
  export interface LineItem {
    id: number;
    productId: number;
    quantity: number;
    emailId: string;
  }
  export interface Product {
    category: string;
    productType: string;
    price: number;
    currency: string;
    quantity: number;
    description: string;
    imageUrl: string;
    id: number;
  }
  