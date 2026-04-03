import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Posts from '@/components/posts';


export default function Blog() {
  return (
  <div className='w-full mx-auto'>
    <div className='flex content-start flex-wrap min-h-screen items-left w-2/5 font-san sm:justify-start px-11 '>
        <Navbar/>
        <p className='font-mono text-sm pb-9'>
            None serious but mostly technical thoughts and snippets of code
        </p>
          <Posts fileLocation="/data/blog.json"/>
        <Footer/>

      </div>
    </div>
  );
}