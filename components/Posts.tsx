import Link from 'next/link';
import useSWR from 'swr';
import {getAllPosts} from "../app/services/getPosts";

type Props = {
    posts: any[];
};

const Posts = () => {

    const {data: posts, isLoading} = useSWR('posts', getAllPosts)
    return (
        isLoading ? (
           <h3>Loading</h3> 
         ) : (
        <ul>
           {posts.map((post: any) => (
             <li key={post.id}>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
             </li>
         )//func map
         ) //map
         } 
         
      </ul>
         
         ) //else
         //loading
         ) //return
    
} //Posts

export {Posts}; 