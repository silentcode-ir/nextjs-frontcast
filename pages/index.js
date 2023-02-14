import fs from 'fs/promises'
import path from 'path';
import { useRouter } from "next/router";
import Link from 'next/link';

function HomePage(props) {
    const router = useRouter()
    const { products } = props
    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link href={`/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export const getStaticProps = async () => {
    const filePath = path.join(process.cwd(), 'data', 'products.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    return {
        props: { products: data.products }
    }
}

export default HomePage;