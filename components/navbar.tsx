'use server'
import Link from 'next/link';

export default async function Navbar() {
    return (
    <header className="sm:justify-start sm:flex-nowrap w-full bg-navbar py-12 pb-9">
        <nav className="max-w-[85rem] w-full mx-auto sm:flex sm:items-center sm:justify-between">
            <Link className="font-serif text-3xl" href="/">Quade Kirby</Link>
            <div className="sm:flex space-x-1 md:flex md:space-x-4 list-none inline-block">
                    <Link href="/blog" className="text-base underline underline-offset-10 font-normal list-none hover:decoration-2 decoration-gray-500 hover:text-gray-600">
                        Blog
                    </Link>
                    <Link href="/projects" className="text-base underline underline-offset-10 font-normal list-none hover:decoration-2 decoration-gray-500 hover:text-gray-600">
                        Projects
                    </Link>
                    <Link href="/resume" className="text-base underline underline-offset-10 font-normal list-none hover:decoration-2 decoration-gray-500 hover:text-gray-600">
                        Resume
                    </Link>
            </div>
        </nav>
    </header>

    )
}