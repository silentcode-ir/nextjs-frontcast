import fs from 'fs/promises'
import path from 'path';

function ProductDetailPage(paths) {
    const { loadedProduct } = paths

    return (
        <div>
            <h1>{loadedProduct.title}</h1>
            <h4>{loadedProduct.price}</h4>
        </div>
    )
}

export async function getStaticPaths(context) {
    const { params } = context
    const productId = params.pid

    const filePath = path.join(process.cwd(), 'data', 'products.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    const product = data.products.find(product => product.id === productId)

    return {
        paths: {
            loadedProduct: product
        }
    }
}

export default ProductDetailPage;