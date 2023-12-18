export interface ProductInfo {
    dateEntry: string;
    id: number;
    image: string;
    name: string;
    price: number;
    type: string;
}

export interface Order {
    client: string;
    dataEntry: string;
    id: number;
    products: OrderInfo[];
    status: string;
    userId: number;
}

export interface OrderInfo {
    qty: number;
    product: ProductInfo;
}
