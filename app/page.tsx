import Footer from "@/components/footer";
import Navbar from "@/components/navbar"
import Posts from "@/components/posts";


export default function Home() {
  return (
    <div className="flex content-start flex-wrap min-h-screen items-left w-2/5 font-sans dark:bg-black sm:justify-start px-11 ">
      
      <Navbar />
      <p className="font-mono text-sm pb-9">
        Computer Engineer interested in robotics, embedded systems, computer vision
        and learning new things. Place to store and catalog all of the little projects
        that i am working on currently or from the past. If you want to learn more 
        or have feedback on any of my notes feel free to reach out to me via email.
      </p>
      
      <Posts fileLocation="/data/posts.json"/>
      <Footer/>
    
    </div>
  );
}

