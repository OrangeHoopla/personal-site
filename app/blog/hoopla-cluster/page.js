import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import SvgComponent from '@/diagrams/hooplaCluster'
import { promises as fs } from 'fs';



export default function Hoopla() {
    return (
        <div className='w-full mx-auto'>
            <div className = 'max-w-3xl mx-auto'>

            <Navbar />
            <p className="font-serif text-6xl mb-6 text-balance md:leading-tight leading-tight">
                Hoopla Cluster 
            </p>


                <div className="grid md:grid-cols-[120px_1fr] gap-0.5 font-mono text-sm mb-6">
                    <div>Published</div>
                    <div>March 11, 2026</div>
                    <div className="max-md:mt-2">Email</div>
                    <div className="group relative cursor-default">
                        <span className="underline decoration-dotted decoration-foreground/50 underline-offset-4">quadekirby@gmail.com</span>
                        <span className="hidden absolute top-0 -translate-y-full left-0 group-hover:block bg-white shadow z-50 px-2 py-1">
                            Brad Zylstra, Quade Kirby, Jacob Card-Howe, Frankie Camargo and Emanuel
                        </span>
                    </div>
                    <div className="max-md:mt-2">Paper</div>
                    <div>
                        {/* <a href="/download/Documentation.pdf" target="_blank" className="!text-foreground underline underline-offset-2">
                            Documentation.pdf
                        </a> */}
                    </div>
                </div>
                Documentation of project goes here
                            <SvgComponent/>
                <Footer />
                
            </div>

                 
        </div>
    );
}