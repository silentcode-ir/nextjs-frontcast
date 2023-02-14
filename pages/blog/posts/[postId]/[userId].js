import { useRouter } from "next/router"

function UserPost() {
    const router = useRouter()
    // console.log(router.pathname);
    // console.log(router.query);
    return (
        <div>
            <h1>User Post</h1>
            <h4>Post Id: {router.query.postId}</h4>
            <h4>User Id: {router.query.userId}</h4>
        </div>
    )
}
export default UserPost