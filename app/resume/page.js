import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Posts from '@/components/posts';


export default function Resume() {
  return (
  <div className='w-full mx-auto'>
    <div className='flex content-start flex-wrap min-h-screen items-left w-2/5 font-sans  sm:justify-start px-11 '>

        <Navbar/>
        <p className='font-mono text-sm pb-9'>
            Work Resume
        </p>

        <Footer/>

      </div>
  </div>
  );
}