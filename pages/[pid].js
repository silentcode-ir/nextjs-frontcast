import fs from 'fs/promises'
import path from 'path';

function ProductDetailPage(paths) {
    const { loadedProduct } = paths

    if (!loadedProduct) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h1>{loadedProduct.title}</h1>
            <h4>{loadedProduct.price}</h4>
        </div>
    )
}


async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'products.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)
    return data
}

export async function getStaticProps(context) {
    const { params } = context
    const productId = params.pid

    const data = await getData()

    const product = data.products.find(product => product.id === productId)

    return {
        props: { loadedProduct: product },
    }
}

export const getStaticPaths = async () => {
    const data = await getData()
    const ids = data.products.map(product => product.id)
    const params = ids.map((item)=>({params: {pid: item}}))

    return {
        paths: params,
        fallback: true
    }
}

export default ProductDetailPage;