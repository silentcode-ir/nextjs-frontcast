import { useRouter } from "next/router"

function userId() {
    const router = useRouter()
    // console.log(router.pathname);
    // console.log(router.query);
    const showUserIdHandler = () => {
        // router.push('/users/Vahid')
        router.push({
            pathname: '/users/[id]',
            query: {id: 'Masood'}
        })
    }
    return (
        <div>
            <h1>User ID</h1>
            <button onClick={showUserIdHandler}>Show User ID</button>
        </div>
    )
}

export default userId