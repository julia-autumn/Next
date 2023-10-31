export default async function getUserPosts(userId: string ) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {next: {revalidate: 60 } })

    if (!result.ok) throw new Error('Failed to fetch user')

    return result.json()
}