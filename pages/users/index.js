import Link from "next/link";

export default function UserPage() {
    const users = [
        { id: 1, username: 'Mohammad' },
        { id: 2, username: 'Vahid' },
        { id: 3, username: 'Hashem' },
        { id: 4, username: 'Qabil' },
        { id: 5, username: 'Habil' },
        { id: 6, username: 'Ali' },
    ]
    return (
        <div>
            <h1>UserPage</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link href={{
                            pathname: '/users/[id]',
                            query: { id: user.id }
                        }}>{user.username}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
