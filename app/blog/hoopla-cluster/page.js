import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import SvgComponent from '@/diagrams/hooplaCluster'
import { promises as fs } from 'fs';



export default function Hoopla() {
    return (
        <div className='w-full mx-auto'>
            <div className = 'max-w-3xl mx-auto'>

            <Navbar />
            <p className="font-serif text-6xl mb-6 text-balance md:leading-tight leading-tight">
                Hoopla Cluster 
            </p>


                <div className="grid md:grid-cols-[120px_1fr] gap-0.5 font-mono text-sm mb-6">
                    <div>Published</div>
                    <div>March 11, 2026</div>
                    <div className="max-md:mt-2">Email</div>
                    <div className="group relative cursor-default">
                        <span className="underline decoration-dotted decoration-foreground/50 underline-offset-4">quadekirby@gmail.com</span>
                        <span className="hidden absolute top-0 -translate-y-full left-0 group-hover:block bg-white shadow z-50 px-2 py-1">
                            Brad Zylstra, Quade Kirby, Jacob Card-Howe, Frankie Camargo and Emanuel
                        </span>
                    </div>
                    <div className="max-md:mt-2">Paper</div>
                    <div>
                        {/* <a href="/download/Documentation.pdf" target="_blank" className="!text-foreground underline underline-offset-2">
                            Documentation.pdf
                        </a> */}
                    </div>
                </div>
                <div className="max-w-3xl mx-auto mb-12 mt-8 border border-[#D4D3CB] bg-white/60 p-6">
                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
                        Used Technologies
                    </div>
                    <div className="columns-1 sm:columns-2 gap-8">
                        <div className="break-inside-avoid mb-4">
                            <p className="font-semibold text-sm block mb-1">
                                Semi-FOSS
                            </p>
                            <div className="space-y-0.5">
                                <p href="#door-drivethrough" className="text-xs text-muted-foreground block">
                                    Tailscale
                                </p>
                            </div>
                        </div>
                        <div className="break-inside-avoid mb-4">
                            <p href="#event-2-laundry" className="font-semibold text-sm block mb-1">
                                FOSS
                            </p>
                            <div className="space-y-0.5">
                                <p className="text-xs text-muted-foreground block">
                                    Key Cloak
                                </p>
                                <p className="text-xs text-muted-foreground block">
                                    K8s
                                </p>
                                <p className="text-xs text-muted-foreground block">
                                    Headscale
                                </p>
                                <p className="text-xs text-muted-foreground block">
                                    Argo CD
                                </p>
                            </div>
                        </div>
                        <div className="break-inside-avoid">
                            <p className="font-semibold text-sm block mb-1">
                            Other
                            </p>
                            <div className="space-y-0.5">
                                <p href="#door-drivethrough" className="text-xs text-muted-foreground block">
                                    Cloudflare
                                </p>
                                <p href="#door-drivethrough" className="text-xs text-muted-foreground block">
                                    AWS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="group/heading relative text-2xl font-normal mt-12 mb-4" id="multimodal-memories">
                    Headscale Overview
                </h3>
                <p className='text-sm text-muted-foreground mb-4'>
                    All cluster nodes, supporting infrastructure, and personal devices participate in a shared Tailnet managed by Headscale (hoopla-headscale.hoopla · 100.64.0.1). Node-to-node traffic is encrypted point-to-point by Tailscale; Headscale acts as the control plane only and does not relay data traffic.
                </p>
                            <SvgComponent/>
                <Footer />
                
            </div>

                 
        </div>
    );
}