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
    products: {
        qty: number;
        product: ProductInfo;
    }[];
    status: string;
    userId: number;
}
