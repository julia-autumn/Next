export default async function getUser() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!result.ok) throw new Error('Failed to fetch data')

    return result.json()
}