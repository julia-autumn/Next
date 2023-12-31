type Props = {
    promise: Promise<Post[]>
}

export default async function UserPosts({promise} : Props) {
    const posts = await promise

    const content = posts.map(post => {
       return (
        <div key={post.id}>
        <h2>{post.id} {post.title}</h2>
        <p>{post.body}</p>
        <br />
        </div>

       )


    })
}