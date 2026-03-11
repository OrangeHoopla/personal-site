import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Posts from '@/components/posts';


export default function Projects() {
  return (
    <div className='flex content-start flex-wrap min-h-screen items-left w-2/5 font-sans dark:bg-black sm:justify-start px-11 '>

        <Navbar/>
        <p className='font-mono text-sm pb-9'>
            Projects that spanned from a few days to possibly months
        </p>
          <Posts fileLocation="/data/projects.json"/>
        <Footer/>

      </div>
  );
}