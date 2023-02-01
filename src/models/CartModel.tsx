class CartModel {
    id: number;
    productId: number;
    name: string;
    quantity: number;
    price: string;
    photo: string;

    constructor({ id, productId, name, quantity, price, photo }:
        { id: number, productId: number, name: string, quantity: number, price: string, photo: string }) {
        this.id = id;
        this.productId = productId;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.photo = photo;
    }
}

export default CartModel