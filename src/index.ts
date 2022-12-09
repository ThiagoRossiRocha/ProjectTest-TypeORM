import { AppDataSource } from "./data-source"
import { Product } from "./entity/Product"

AppDataSource.initialize().then(async () => {
    const product = new Product()

    //product.image = "https://www.imagensempng.com.br/wp-content/uploads/2022/01/Coca-Cola-Lata-Png.png"
    //product.name = "Agua"
    //product.price = 4.00

    await AppDataSource.manager.save(product)
    console.log("Loading products from the database...")

    const products = await AppDataSource.manager.find(Product)
    console.log("Loaded products: ", products)

    const allPriceProducts = AppDataSource.manager.find(Product);
}).catch(error => console.log(error))
