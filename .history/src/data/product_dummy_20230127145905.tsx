import ProductModel from "../models/ProductModel"

const productDumy = [
    new ProductModel({
        id: 8,
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
    }),
    new ProductModel({
        "id": 6,
            name: "iPad",
            description: "iPad é uma linha de tablets projetada, desenvolvida e comercializada pela Apple, que funciona com o sistema operacional móvel iOS e iPadOS.",
            photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp",
            price: 4200.00,
    })
]

export default productDumy