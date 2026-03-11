'use server'
import { promises as fs } from 'fs';


export default async function Posts({ fileLocation }: { fileLocation: string }) {
    const file = await fs.readFile(process.cwd() + fileLocation, 'utf8');
    const data = JSON.parse(file);
    const wow = false;
    return (
        <div className="pl-2">

            <div className="relative flex flex-col space-y-4 border-l border-gray-300 py-4 before:h-6 before:w-px before:bg-gradient-to-t before:from-transparent before:to-background before:absolute before:-left-px before:top-0 after:h-6 after:w-px after:bg-gradient-to-b after:from-transparent after:to-background after:absolute after:-left-px after:bottom-0">
                {data.posts.map((post: { title: string; date: string; content: string; link: string; new: boolean; box: boolean; }) => {
                    return (

                        <a key={post.link} className={`flex flex-col gap-1 px-3 py-2 ml-6 group cursor-pointer 
                            ${post.box ? "bg-white/60 border border-[#D4D3CB] hover:border-[#C0BDAD] hover:shadow-[3px_3px_0px_#C0BDAD] transition-all hover:bg-white" : "hover:bg-background-hover"}`}
                            href={post.link}>
                            <div className="flex items-baseline gap-1 justify-between text-xs w-full relative">
                                <button className="absolute size-[5px] bg-gray-900 rounded-xs -left-[39px] top-[4px] outline outline-background outline-2" />
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