import ProductModel from "../models/ProductModel"

const productDumy = [
    new ProductModel({
        id: 1,
        name: "Iphone 11 128 GB",
        description: "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
        photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
        price: 5000.00,
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