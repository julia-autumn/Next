'use client';
import { getPostsBySearch } from '@/app/services/getPosts';
import {FormEventHandler, useState} from 'react';
import useSWR from 'swr';

type Props = {
    onSearch: (value: any[]) => void;
}

const PostSearch = ({onSearch}: Props) => { 
    const {mutate} = useSWR('posts')
    const [search, setSearch] = useState('');
     const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()
        const posts = await getPostsBySearch(search)
      //  onSearch(posts); 
      mutate(posts);
       
    }; 

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder='search' value={search} onChange={event => setSearch(event.target.value)}/>
            <button type="submit">Search</button>
        </form>
    )
}

export {PostSearch};

