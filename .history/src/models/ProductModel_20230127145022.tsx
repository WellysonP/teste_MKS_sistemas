class ProductModel {
   id!: number;
   name!: string;
   price!: number;
   description!: string;
   photo!: string;

    constructor(id: number, name: string, price: number, description: string, photo: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.photo = photo;
    }
}


export default ProductModel