import { For } from "solid-js"
import { PreviewCanvas } from "./PreviewCanvas"
import { Module_Snippets } from "./modules"

export const Hero = (props: { onExplore: () => void }) => {

    const copy_to_clipboard = (text: string) => {
        console.log(text)
        navigator.clipboard.writeText(text)
    }

    const INSTALLATION_TEXT = `pnpm add twisterjs`.trim()
    const USAGE_TEXT = `
import { TwisterJS, add, vec2 } from 'twisterjs'

console.log(TwisterJS, add(vec2(0, 0), vec2(0, 0)))
`.trim()


    return (<>
    <div class='pt-24 pb-12 px-4 max-w-6xl mx-auto'>
        <div class='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
            {/* Left: Sticky Brancing (On Desktop) */}
            <div class='lg:col-span-3 lg:sticky lg:top-24'>
                <h1 class='text-4xl font-bold tracking-tighter leading-node mb-3'>
                    TwisterJS<span class='text-[#ff5f5f]'>.</span>
                </h1>
                <p class='text-xs text-gray-500 mb-8 font-medium leading-relaxed max-w-50'>
                    The subatomic modules for JS13k. Tiny Modules for Indie Game Developers.
                </p>

                {/* Installation Section */}
                <div class='mb-8 space-y-4'>
                    <div class='group'>

                      <div class='text-[9px] font-black uppercase tracking-[0.2em] text-[#5f6fff] mb-2 flex items-center gap-2'>
                        <span class='w-1 h-1 bg-[#5f6fff] rounded-xs'></span>
                        Installation:
                      </div> 
                      <div class='relative group/code cursor-pointer bg-[#f3f4f6] border border-gray-200 rounded-xs p-3 font-mono text-[11px] text-gray-600 hover:border-[#5f6fff]/30 transition-all'
                       onClick={() => copy_to_clipboard(INSTALLATION_TEXT)}
                      >
                      <code class='block whitespace-nowrap overflow-hidden text-ellipsis'>pnpm add twisterjs</code>
                      <div class='absolute right-3 top-3 opacity-0 group-hover/code:opacity-100 transition-opacity'>
                            <svg class="w-3.5 h-3.5 text-[#5f6fff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                      </div>
                      </div>
                    </div>
                    <div class='group'>

                      <div class='text-[9px] font-black uppercase tracking-[0.2em] text-[#5f6fff] mb-2 flex items-center gap-2'>
                        <span class='w-1 h-1 bg-[#5f6fff] rounded-xs'></span>
                        Usage:
                      </div> 
                      <div class='relative group/code cursor-pointer bg-[#f3f4f6] border border-gray-200 rounded-xs p-3 font-mono text-[11px] text-gray-600 hover:border-[#5f6fff]/30 transition-all'
                       onClick={() => copy_to_clipboard(USAGE_TEXT)}
                      >
                      <code class='block leading-relaxed whitespace-pre-wrap'>{`
import { TwisterJS, add, vec2 } from 'twisterjs'

console.log(TwisterJS, add(vec2(0, 0), vec2(0, 0)))
`
                      }</code>
                      <div class='absolute right-3 top-3 opacity-0 group-hover/code:opacity-100 transition-opacity'>
                            <svg class="w-3.5 h-3.5 text-[#5f6fff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                      </div>
                      </div>
                    </div>


                </div>


                <div class='flex flex-col gap-3'>
                    <button onClick={props.onExplore} class='w-full px-5 py-3 bg-[#1a1a1a] text-white rounded-xs font-bold text-[11px] uppercase tracking-widest hover:bg-black transition-all shadow-lg'>
                        Full Reference
                    </button>
                    <div class='flex gap-2'>
                        <button class='flex-1 px-4 py-2.5 bg-white border border-gray-200 rounded-xs font-bold text-[10px] uppercase tracking-widest hover:border-[#5f6fff] transition-all'
                        onClick={() => window.open('https://github.com/eguneys/twisterjs', '_blank')}>
                            GitHub
                        </button>
                    </div>
                </div>
            </div>


            {/* Right: Scrollable Feature Showcase */}
            <div class='lg:col-span-9 space-y-4'>
                <div class='flex items-center justify-between px-2 mb-4'>
                    <span class='text-[10px] font-black uppercase tracking-[0.3em] text-[#5f6fff]'>Live Examples</span>
                    <span class='text-[9px] text-gray-400 font-mono'>SCROLL TO EXPLORE →</span>
                </div>


                <div class='space-y-4'>
                    <For each={Module_Snippets}>{ mod => 
                       <div class='group flex flex-col md:flex-row gap-0.5 bg-[#f3f4f6] rounded-xs overflow-hidden border border-gray-100 hover:border-[#5f6fff]/30 transition-all duration-300'>
                        {/* Code Side */}
                        <div class='flex-1 bg-[#0d0d0d] p-6 relative min-h-35'>
                            <div class='flex items-center justify-between mb-4'>
                                <h3 class='text-[10px] font-black uppercase tracking-widest text-white/40'>{mod.title}</h3>
                                <span class='text-[9px] font-mono text-[#5f6fff] opacity-50'>{mod.description}</span>
                            </div>
                            <pre class='mono text-[12px] text-gray-400 leading-relaxed overflow-x-auto selection:bg-[#5f6fff]/30'>
                            <code class='text-[#5f6fff]/60'>{mod.id}</code></pre>
                            <br/>
                            {mod.code}
                        </div>
                        {/* Live Preview Side */}
                        <div class='w-full md:w-45 bg-black shrink-0 flex items-center justify-center p-1'>
                            <PreviewCanvas renderFn={mod.demo}/>
                        </div>
                       </div>
                    }</For>
                </div>

            </div>
        </div>
    </div>
    </>)
}