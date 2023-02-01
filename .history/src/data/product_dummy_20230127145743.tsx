import ProductModel from "../models/ProductModel"

const productDumy = [
    new ProductModel({
        id: 1,
        name: "Headset Cloud Stinger",
        price: 600.00,
        description: "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
        photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp"
    }),
    new ProductModel({
        "id": 7,
            name: "Headset Cloud Revolver",
            description: "A linha HyperX Cloud Revolver foi projetada para atender as exigências dos gamers de PC ou de console.",
            photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp",
            price: 1000.00,
        
    })


]

export default productDumy