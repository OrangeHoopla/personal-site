import Footer from '@/components/footer';
import Navbar from '@/components/navbar';


export default function Resume() {
  return (
  <div className='w-full mx-auto'>
    <div className='flex content-start flex-wrap min-h-screen items-left w-2/5 font-sans  sm:justify-start px-11 '>

        <Navbar />

        <p className="font-mono text-sm pb-9">
          While I’m fully locked into my current projects and not looking for a move,
          I’m always down to talk shop or look at a truly unique engineering challenge.
          If you're building something wild in spatial AI or hardware-software integration,
          consider this my digital handshake.
        </p>

        <div class="border-b border-gray-500">
          <button onclick="toggleAccordion(1)" class="w-full flex justify-between items-center py-5">
            <span className='font-bold'>Work Experience</span>
            <span id="icon-1" class="text-slate-800 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
              </svg>
            </span>
          </button>
        <div id="content-1" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
          <div class="pb-5 text-sm text-slate-500">
            Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.
          </div>
        </div>
      </div>
      
        
      <div class="border-b border-gray-500">
          <button onclick="toggleAccordion(1)" class="w-full flex justify-between items-center py-5">
            <span className='font-bold'>Skills</span>
            <span id="icon-1" class="text-slate-800 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
              </svg>
            </span>
          </button>
        <div id="content-1" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
          <div class="pb-5 text-sm text-slate-500">
            Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.
          </div>
        </div>
      </div>
      
      <div class="border-b border-gray-500">
          <button onclick="toggleAccordion(1)" class="w-full flex justify-between items-center py-5">
            <span className='font-bold'>Education</span>
            <span id="icon-1" class="text-slate-800 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
              </svg>
            </span>
          </button>
        <div id="content-1" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
          <div class="pb-5 text-sm text-slate-500">
            Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.
          </div>
        </div>
      </div>
      
        
        
      <div class="border-b border-gray-500">
          <button onclick="toggleAccordion(1)" class="w-full flex justify-between items-center py-5">
            <span className='font-bold'>Contact Information</span>
            <span id="icon-1" class="text-slate-800 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
              </svg>
            </span>
          </button>
        <div id="content-1" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
          <div class="pb-5 text-sm text-slate-500">
            Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.
          </div>
        </div>
      </div>  
      
        
        
        

        <Footer/>

      </div>
  </div>
  );
}