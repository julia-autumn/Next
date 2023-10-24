import Link from 'next/link';
import '../app/globals.css';

export const TheHeader = () => {
    return (
        <header className='header' >
             <Link href="/">Home</Link>
             <Link href="/blog">Blog</Link>
             <Link href="/about">About</Link>
        </header>
    )
}
