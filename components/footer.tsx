'use server'

export default async function Footer() {
    
    return (
        <footer className="">
            <div className="max-w-3xl w-full mx-auto flex justify-between py-6 items-baseline border-t border-black mt-12">
                <p className="font-serif text-lg">Quade Kirby's Website</p>
                <div className="flex gap-4"></div>
            </div>
        </footer>    
    )
    
}