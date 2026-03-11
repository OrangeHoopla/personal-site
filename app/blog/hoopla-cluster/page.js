import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function Hoopla() {
    return (
        <div className='w-full mx-auto'>
            <div className = 'max-w-3xl mx-auto'>

            <Navbar />
            <p className="font-serif text-6xl mb-6 text-balance md:leading-tight leading-tight">
                PlaceHolder Project Title
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
            
What is Lorem Ipsum?

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Why do we use it?

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik
            <Footer />

          </div>
                  
    </div>);
}