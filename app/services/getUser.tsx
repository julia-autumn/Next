export default async function getUser(userId: string ) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

    if (!result.ok) throw new Error('Failed to fetch user')

    return result.json()
}