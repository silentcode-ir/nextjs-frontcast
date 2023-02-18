function UserPage(props){
    return <h2>{props.username}</h2>
}

export default UserPage

export async function getServerSideProps(context){
    const {params, req, res} = context
console.log(req);

    return {
        props:{
            username: 'M423'
        }
    }
}