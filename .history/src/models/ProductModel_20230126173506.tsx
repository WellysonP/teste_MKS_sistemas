class ProductModel {
    id: number;
    name: string;
    price: number;
    text: string;
    image: string;

    constructor(id: number, name: string, price: number, text: string, image: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.text = text;
        this.image = image;
    }
}

export default ProductModel