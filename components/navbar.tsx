'use server'

export default async function Navbar() {
    return (
    <header className="sm:justify-start sm:flex-nowrap w-full bg-navbar py-12 pb-9">
        <nav className="max-w-[85rem] w-full mx-auto sm:flex sm:items-center sm:justify-between">
            <a className="font-serif text-3xl" href="#">Quade Kirby</a>
            <div className="md:flex md:space-x-4 list-none inline-block">
                    <a href="#" className="text-base md:underline underline-offset-10 font-normal list-none hover:decoration-2 decoration-gray-500 hover:text-gray-600">
                        Blog
                    </a>
                    <a href="#" className="text-base md:underline underline-offset-10 font-normal list-none hover:decoration-2 decoration-gray-500 hover:text-gray-600">
                        Projects
                    </a>
                    <a href="#" className="text-base md:underline underline-offset-10 font-normal list-none hover:decoration-2 decoration-gray-500 hover:text-gray-600">
                        Resume
                    </a>
            </div>
        </nav>
    </header>

    )
}