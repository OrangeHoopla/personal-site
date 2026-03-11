'use server'
import { promises as fs } from 'fs';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

export default async function Posts() {
    const file = await fs.readFile(process.cwd() + '/app/data/posts.json', 'utf8');
    const data = JSON.parse(file);
    return (
        <div className="pl-2">

            <div className="relative flex flex-col space-y-4 border-l border-gray-300 py-4 before:h-6 before:w-px before:bg-gradient-to-t before:from-transparent before:to-background before:absolute before:-left-px before:top-0 after:h-6 after:w-px after:bg-gradient-to-b after:from-transparent after:to-background after:absolute after:-left-px after:bottom-0">
                {data.posts.map((post: { title: string; date: string; content: string; link: string; new: boolean }) => {
                    return (

                        <a key={post.link} className="flex flex-col gap-1 px-3 py-2 ml-6 hover:bg-background-hover group cursor-pointer" href={post.link}>
                            <div className="flex items-baseline gap-1 justify-between text-xs w-full relative">
                                <button data-state="closed" className="absolute size-[7px] bg-gray-900 rounded-xs -left-[40px] top-[4px] outline outline-background outline-2" />
                                <div className="flex items-baseline gap-2 relative grow truncate">
                                    {post.new &&
                                        <div className="px-1 h-4 w-fit bg-[#FBD45B] text-[#111] text-[10px] font-medium flex justify-center items-center">
                                            New
                                        </div>
                                    }
                                    <div className="font-semibold truncate" title="VLAs with Long and Short-Term Memory">
                                        {post.title}
                                    </div>
                                </div>
                                <div className="text-xs text-muted-foreground whitespace-nowrap shrink-0">
                                    {post.date}
                                </div>
                            </div>
                            <div className="text-xs text-muted-foreground">
                                {post.content}
                            </div>
                        </a>

                        
                    )
                })}

                

            </div>
        </div>
    )
}

// <a className="flex flex-col gap-1 px-3 py-2 ml-6 hover:bg-background-hover group cursor-pointer" href="/research/memory">
//                     <div className="flex items-baseline gap-1 justify-between text-xs w-full relative">
//                         <button data-state="closed" className="absolute size-[7px] bg-gray-900 rounded-xs -left-[40px] top-[4px] outline outline-background outline-2" />
//                         <div className="flex items-baseline gap-2 relative grow truncate">
//                             <div className="px-1 h-4 w-fit bg-[#FBD45B] text-[#111] text-[10px] font-medium flex justify-center items-center">
//                                 New
//                             </div>
//                             <div className="font-semibold truncate" title="VLAs with Long and Short-Term Memory">VLAs with Long and Short-Term Memory</div>
//                         </div>
//                         <div className="text-xs text-muted-foreground whitespace-nowrap shrink-0">March 3, 2026</div>
//                     </div>
//                     <div className="text-xs text-muted-foreground">
//                         Multi-Scale Embodied Memory (MEM) gives our models both long-term and short-term memory, enabling complex tasks longer than ten minutes.
//                     </div>
//                 </a>

                
                // <a className="flex flex-col gap-1 px-3 py-2 ml-6 hover:bg-background-hover group cursor-pointer" href="/research/memory">
                //     <div className="flex items-baseline gap-1 justify-between text-xs w-full relative">
                //         <button data-state="closed" className="absolute size-[7px] bg-gray-900 rounded-xs -left-[40px] top-[4px] outline outline-background outline-2" />
                //         <div className="flex items-baseline gap-2 relative grow truncate">
                //             <div className="px-1 h-4 w-fit bg-[#FBD45B] text-[#111] text-[10px] font-medium flex justify-center items-center">
                //                 New
                //             </div>
                //             <div className="font-semibold truncate" title="VLAs with Long and Short-Term Memory">
                //                 VLAs with Long and Short-Term Memory
                //             </div>
                //         </div>
                //         <div className="text-xs text-muted-foreground whitespace-nowrap shrink-0">
                //             March 3, 2026
                //         </div>
                //     </div>
                //     <div className="text-xs text-muted-foreground">
                //         Multi-Scale Embodied Memory (MEM) gives our models both long-term and short-term memory, enabling complex tasks longer than ten minutes.
                //     </div>
                // </a>

             //    <a className="flex flex-col gap-1 px-3 py-2 ml-6 hover:bg-background-hover group cursor-pointer" href="/research/memory"></a>
//                 <a className="flex flex-col gap-2 px-3 py-2 ml-6 group cursor-pointer bg-white/60 border border-[#D4D3CB] hover:border-[#C0BDAD] hover:shadow-[3px_3px_0px_#C0BDAD] transition-all hover:bg-white" href="/blog/partner">
//                     <div className="flex items-baseline gap-2 justify-between relative">
//                         <div className="flex items-center gap-2 min-w-0 flex-1">
//                             <button data-state="closed">
//                                 <div className="absolute size-[7px] bg-gray-900 rounded-sm -left-[40px] top-[7px] outline outline-background outline-2" />
//                             </button>
                            
//                             <div className="text-xs truncate font-semibold" title="The Physical Intelligence Layer">
//                                 The Physical Intelligence Layer
//                             </div>
//                         </div>
//                         <div className="text-xs text-muted-foreground shrink-0 ml-2">
//                             February 24, 2026
//                         </div>
//                     </div>
//                     <p className="text-xs text-muted-foreground no-underline">
//                         General-purpose physical intelligence models will enable a Cambrian explosion of robotics applications. See how our partners are already solving real-world problems.
//                     </p>
//                 </a>