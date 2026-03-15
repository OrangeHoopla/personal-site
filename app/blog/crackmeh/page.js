import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function crack() {
    
    return (
        <div className='w-full mx-auto'>
            <div className = 'max-w-3xl mx-auto'>

                <Navbar />
                <p className="font-serif text-6xl mb-6 text-balance md:leading-tight leading-tight">
                    CrackMeh
                </p>


                <div className="grid md:grid-cols-[120px_1fr] gap-0.5 font-mono text-sm mb-6">
                    <div>Published</div>
                    <div>January 11, 2021</div>
                    <div className="max-md:mt-2">Email</div>
                    <div className="group relative cursor-default">
                        <span className="underline decoration-dotted decoration-foreground/50 underline-offset-4">quadekirby@gmail.com</span>
                    </div>
                </div>

                <pre>
                    3lli0t found a diary from Evil Corp. He have to get into the system, but can't as he have a hash of a password and no plaintext. Help him to get into system.

                    flag format: noob{'{plaintext}'}

hash: 4ee805f9397a1d584ef9be9d2a4f8f20

Author: D3v1LaL

given a file called diary.txt

_________________________
|                       |
|                       |
|                       |
|         Alice         |
|        January        |
|         1994          |
|         USA           |
|          25           |
|       Security        |
|                       |
|                       |
|_______________________|

using the MD5 hash we we iterate through all possible permutations to determine the flag
                </pre>

            


                <Footer />

          </div>
                  
    </div>);
}