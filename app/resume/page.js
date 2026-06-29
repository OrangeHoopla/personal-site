import Footer from '@/components/footer';
import Navbar from '@/components/navbar';


export default function Resume() {
  return (
  <div className='w-full mx-auto'>
    <div className='flex content-start flex-wrap min-h-screen items-left w-2/5 font-sans  sm:justify-start px-11 '>

        <Navbar />

        

        <div className="grid md:grid-cols-[120px_1fr] gap-0.5 font-mono text-sm mb-6">
                    <div>Published</div>
                    <div>Jun 28, 2026</div>
                    <div className="max-md:mt-2">Email</div>
                    <div className="group relative cursor-default">
                        <span className="underline decoration-dotted decoration-foreground/50 underline-offset-4">quadekirby@gmail.com</span>
                    </div>
                    {/* <div className="max-md:mt-2">Paper</div> */}
                    <div>
                        {/* <a href="/download/Documentation.pdf" target="_blank" className="!text-foreground underline underline-offset-2">
                            Documentation.pdf
                        </a> */}
                    </div>
        </div>
        <div>
          <h2 className="font-bold">Department of Defense</h2>
          <h3 className="font-mono">GG 11</h3>

          <ul className="list-disc pl-6">
            <li>Led small group of software engineers in maintaining enterprise system</li>
            <li>Designed and built distributed enterprise system using microservices</li>
            <li>Mentored multiple junior developers through code reviews and pair programming</li>
            <li>Architected portions of a system that utilized multiple HPCs to utilize their full compute capacity</li>
          </ul>

          <h3 className="font-mono">GG 7/9</h3>
          <ul className="list-disc pl-6">
            <li>Collaborated with cross-functional teams and customers to understand needs and derive software requirements for complex systems</li>
            <li>Analyzed complex problems and proposed effective technical solutions, considering costs and benefits</li>
            <li>Optimized MongoDb resource usage allowing major cost savings</li>
            <li>Optimized internal user service reducing result from 30 minutes to 3 minutes</li>
            <li>Applied software engineering principles to design, develop and maintain robust and scalable software applications</li>
          </ul>
        </div>
        
        
        

        <Footer/>

      </div>
  </div>
  );
}