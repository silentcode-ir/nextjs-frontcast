import { useRouter } from "next/router"

function Products(){
    const router = useRouter()
    console.log(router.query);
    return (
        <h1>Product </h1>
    )
}

export default Products