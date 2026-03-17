import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import ReactMarkdown from 'react-markdown'
import { promises as fs } from 'fs';

const markdown = await fs.readFile(process.cwd() + "/data/crack.md", 'utf8');

export default function Hoopla() {
    return (
        <div className='w-full mx-auto'>
            <div className = 'max-w-3xl mx-auto'>

            <Navbar />
            <p className="font-serif text-6xl mb-6 text-balance md:leading-tight leading-tight">
                CrackMeh
            </p>


                <div className="grid md:grid-cols-[120px_1fr] gap-0.5 font-mono text-sm mb-6">
                    <div>Published</div>
                    <div>March 11, 2026</div>
                    <div className="max-md:mt-2">Email</div>
                    <div className="group relative cursor-default">
                        <span className="underline decoration-dotted decoration-foreground/50 underline-offset-4">quadekirby@gmail.com</span>
                        {/* <span class="hidden absolute top-0 -translate-y-full left-0 group-hover:block bg-white shadow z-50 px-2 py-1">
                            Marcel Torne, Karl Pertsch, Homer Walke, Kyle Vedder, Suraj Nair, Brian Ichter, Allen Ren, Haohuan Wang, Jiaming Tang, Kyle Stachowicz, Karan Dhabalia, Michael Equi, Quan Vuong, Jost Tobias Springenberg, Sergey Levine, Chelsea Finn, Danny Driess
                        </span> */}
                    </div>
                    <div className="max-md:mt-2">Paper</div>
                    <div>
                        <a href="/download/Documentation.pdf" target="_blank" className="!text-foreground underline underline-offset-2">
                            Documentation.pdf
                        </a>
                    </div>
                </div>
                <ReactMarkdown>{markdown}</ReactMarkdown> 
<Footer />
                
            </div>

                 
        </div>
    );
}