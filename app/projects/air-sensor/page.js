import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Wwww from '@/components/WWWW';

export default function AirSensor() {
  return (
      <div className='w-full mx-auto'>
          <div className='w-full mx-auto dark:bg-black'>
                <div className = 'max-w-3xl mx-auto'>
    
                <Navbar />
                <p className="font-serif text-6xl mb-6 text-balance md:leading-tight leading-tight">
                    Home Air Sensor 
                </p>
    
    
                    <div className="grid md:grid-cols-[120px_1fr] gap-0.5 font-mono text-sm mb-6">
                        <div>Published</div>
                        <div>February 24, 2026</div>
                        <div className="max-md:mt-2">Email</div>
                        <div className="group relative cursor-default">
                            <span className="decoration-dotted decoration-foreground/50 underline-offset-4">quadekirby@gmail.com</span>
                        </div>
                        {/* <div className="max-md:mt-2">Paper</div> */}
                        <div>
                            {/* <a href="/download/Documentation.pdf" target="_blank" className="!text-foreground underline underline-offset-2">
                                Documentation.pdf
                            </a> */}
                        </div>
                    </div>
                    
                    
                    
                    <p className='text-sm text-muted-foreground mb-4'>
                  Based on the Airgradient home sensor this is a small side project or effectively a assembly of their project, minus
                  the generic flash capability. I have also removed the small screen sensor in favor of simple LEDs as a direct indicator 
                  to the overall quality of the air.
                    </p>
    
                    <div className="max-w-3xl mx-auto mb-12 mt-8 border border-[#D4D3CB] bg-white/60 p-6">
                        <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
                            Used Technologies
                        </div>
                        <div className="columns-1 sm:columns-2 gap-8">
                            <div className="break-inside-avoid mb-4">
                                <p className="font-semibold text-sm block mb-1">
                                    Chip
                                </p>
                                <div className="space-y-0.5">
                                    <p href="#door-drivethrough" className="text-xs text-muted-foreground block">
                                        ESP-8266
                                    </p>
                                </div>
                            </div>
                            <div className="break-inside-avoid mb-4">
                                <p href="#event-2-laundry" className="font-semibold text-sm block mb-1">
                                    Sensors
                                </p>
                                <div className="space-y-0.5">
                                    <p className="text-xs text-muted-foreground block">
                                        Senseair S8 Module
                                    </p>
                                    <p className="text-xs text-muted-foreground block">
                                        PMS5003
                                    </p>
                                    <p className="text-xs text-muted-foreground block">
                                        SHT30
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
                    
                    <div className='h-150'>
                                <Wwww />
                    </div>
                    

                    <Footer />
                    
                </div>
    
                     
          </div>
        </div>
  );
}