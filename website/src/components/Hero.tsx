import { createEffect, createMemo, createSignal, For, onCleanup } from "solid-js"
import { PreviewCanvas } from "./PreviewCanvas"
import { Module_Snippets } from "./modules"
import { CodeHighlight } from "./CodeHighlight"
import { makePersisted } from "@solid-primitives/storage"

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
            {/* Left: Sticky Branding (On Desktop) */}
            <div class='lg:col-span-3 lg:sticky lg:top-24'>
                <h1 class='text-4xl font-bold tracking-tighter leading-node mb-3 dark:text-white'>
                    TwisterJS<span class='text-accent-500'>.</span>
                </h1>
                <p class='text-xs text-zinc-500 dark:text-zinc-400 mb-8 font-medium leading-relaxed max-w-50'>
                    The subatomic modules for JS13k. Tiny Modules for Indie Game Developers.
                </p>

                {/* Installation Section */}
                <div class='mb-8 space-y-4'>
                    <div class='group'>

                      <div class='text-[9px] font-black uppercase tracking-[0.2em] text-brand-500 mb-2 flex items-center gap-2'>
                        <span class='w-1 h-1 bg-brand-500 rounded-xs'></span>
                        Quick Start:
                      </div> 
                      <div class='relative group/code cursor-pointer bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xs p-3 font-mono text-[11px] text-zinc-600 dark:text-zinc-400 hover:border-brand-500/30 transition-all shadow-xs'
                       onClick={() => copy_to_clipboard(INSTALLATION_TEXT)}
                      >
                      <code class='block whitespace-nowrap overflow-hidden text-ellipsis'>pnpm add twisterjs</code>
                      <div class='absolute right-3 top-3 opacity-0 group-hover/code:opacity-100 transition-opacity'>
                            <svg class="w-3.5 h-3.5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                      </div>
                      </div>
                    </div>
                    <div class='group'>

                      <div class='text-[9px] font-black uppercase tracking-[0.2em] text-brand-500 mb-2 flex items-center gap-2'>
                        <span class='w-1 h-1 bg-brand-500 rounded-xs'></span>
                        Usage:
                      </div> 
                      <div class='relative group/code cursor-pointer bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xs p-3 font-mono text-[11px] text-zinc-600 dark:text-zinc-400 hover:border-brand-500/30 transition-all shadow-xs'
                       onClick={() => copy_to_clipboard(USAGE_TEXT)}
                      >
                      <CodeHighlight class='block leading-relaxed whitespace-pre-wrap' code={USAGE_TEXT}/>
                      <div class='absolute right-3 top-3 opacity-0 group-hover/code:opacity-100 transition-opacity'>
                            <svg class="w-3.5 h-3.5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                      </div>
                      </div>
                    </div>


                </div>


                <div class='flex flex-col gap-3'>
                    <button onClick={props.onExplore} class='w-full px-5 py-3 bg-[#1a1a1a] dark:bg-zinc-100 dark:text-zinc-900 text-white rounded-xs font-bold text-[11px] uppercase tracking-widest hover:bg-black dark:hover:bg-white transition-all shadow-xs active:scale-95'>
                        API Reference
                    </button>
                    <div class='flex gap-2'>
                        <button class='flex-1 px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xs font-bold text-[10px] uppercase tracking-widest hover:border-brand-500 transition-all'
                        onClick={() => window.open('https://github.com/eguneys/twisterjs', '_blank')}>
                            GitHub
                        </button>
                    </div>
                </div>
            </div>

            <Showcase />
            
        </div>
    </div>
    </>)
}


const Showcase = () => {

    let workbenchRef!: HTMLDivElement

    const [isFullscreen, setIsFullscreen] = createSignal(false)
    createEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement)
        }
        document.addEventListener('fullscreenchange', handleFullscreenChange)
        onCleanup(() => 
            document.removeEventListener('fullscreenchange', handleFullscreenChange)
        )
    })

    const toggleFullscreen = () => {
        if (!workbenchRef) return

        if (!document.fullscreenElement) {
            workbenchRef.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`)
            })
        } else {
            document.exitFullscreen()
        }
    }

    const [activeSnippetId, setActiveSnippetId] = makePersisted(createSignal(Module_Snippets[0].id), {
        name: '.twisterjs.active-snippet-id'
    })
    const activeSnippet = createMemo(() => Module_Snippets.find(_ => _.id === activeSnippetId())!)

    return (<>

        {/* Right: Scrollable Feature Showcase */}
        <div class='lg:col-span-9'>
            <div class='flex items-center justify-between px-2 mb-4'>
                <div class='flex items-center gap-3'>
                    <span class='text-[10px] font-black uppercase tracking-[0.3em] text-brand-500'>Example Library</span>
                    <span class='px-2 py-0.5 bg-brand-500/10 text-brand-500 rounded-xs text-[8px] font-bold uppercase'>{Module_Snippets.length} examples</span>
                </div>
            </div>

            <div ref={workbenchRef} class={`bg-white dark:bg-zinc-900 rounded-xs border border-zinc-100 dark:border-zinc-800 overflow-hidden shadow-xs flex flex-col md:flex-row ${isFullscreen() ? 'h-screen w-screen rounded-none border-none': ''}`}>
                {/* Catalog Sidebar (Scalable Scrollable List) */}
                <div class={`w-full md:w-56 bg-zinc-50/30 dark:bg-zinc-950/30 border-r border-zinc-100 dark:border-zinc-800 flex flex-col overflow-hidden shrink-0 ${isFullscreen() ? 'md:max-h-none' : 'max-h-50 md:max-h-none'}`}>
                    <div class='p-3 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50'>
                        <div class='text-[9px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest'>Select an Example</div>
                    </div>

                    <div class='flex-1 overflow-y-auto scrollbar-hide py-1'>
                        <For each={Module_Snippets}>{mod =>
                            <button
                                onClick={() => setActiveSnippetId(mod.id)}
                                class={`w-full text-left px-4 py-3.5 transition-all group flex items-start gap-3 border-b border-zinc-50/50 dark:border-zinc-900/50 ${
                                    activeSnippetId() === mod.id 
                                    ? 'bg-white dark:bg-zinc-900 shadow-xs z-10' 
                                    : 'hover:bg-zinc-100/30 dark:hover:bg-zinc-800/30'
                                    }`}
                            >
                                <div class={`mt-1.5 w-1.5 h-1.5 rounded-xs shrink-0 transition-all ${
                                    activeSnippetId() === mod.id ? 'bg-brand-500 scale-125' : 'bg-zinc-200 dark:bg-zinc-800'
                                    }`}></div>

                                <div class='min-w-0'>
                                    <div class={`text-[10px] font-bold uppercase tracking-wide truncate ${
                                        activeSnippetId() === mod.id ? 'text-zinc-900 dark:text-zinc-100' 
                                        : 'text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400'
                                    }`}>
                                        {mod.title}
                                    </div>
                                    <div class='text-[9px] text-zinc-300 dark:text-zinc-700 font-mono truncate'>{mod.id}</div>
                                </div>
                            </button>
                        }</For>
                    </div>
                </div>


                {/* Workbench Stage */}
                <div class='flex-1 flex flex-col bg-[#0d0d0d] min-w-0'>
                    {/* Top: Metadata Bar */}
                    <div class='p-4 border-b border-white/5 flex items-center justify-between bg-black/40'>
                      <div class='flex flex-col'>
                        <span class='text-[10px] font-bold text-white uppercase tracking-widest'>{activeSnippet().title}</span>
                        <span class='text-[9px] text-brand-500 font-mono opacity-80'>{activeSnippet().description}</span>
                      </div>
                      <button onClick={toggleFullscreen} title={isFullscreen() ? 'Exit Fullscreen' : 'Enter Fullscreen'} class='flex gap-1.5 group/controls p-1.5 hover:bg-white/5 rounded-xs transition-colors'>
                        <div class={`w-2.5 h-2.5 rounded-xs bg-red-500/40 group-hover/controls:bg-red-500 transition-colors`}></div>
                        <div class={`w-2.5 h-2.5 rounded-xs bg-yellow-500/40 group-hover/controls:bg-yellow-500 transition-colors`}></div>
                        <div class={`w-2.5 h-2.5 rounded-xs bg-green-500/40 group-hover/controls:bg-green-500 transition-colors`}></div>
                      </button>
                    </div>
                    {/* Bottom: Split Editor/Preview */}
                    <div class='flex-1 flex flex-col lg:flex-row min-h-0'>
                        {/* Code Area */}
                        <div class='flex-1 px-3 overflow-auto scrollbar-hide relative border-r border-white/5 min-h-50'>
                            <pre class='mono text-[11px] text-zinc-400 leading-relaxed selection:bg-brand-500/40'>
                                <CodeHighlight code={activeSnippet().code} />
                            </pre>
                        </div>


                        {/* Preview Area */}
                        <div class={`w-full bg-black shrink-0 flex items-center justify-center p-1 ${isFullscreen() ? 'lg:w-[45%]' : 'lg:w-[320px] '}`}>
                            <div class={`w-full relative ${isFullscreen() ? 'max-w-125' : 'max-w-60'}`}>
                                {/* Shadow Decor */}
                                <div class='absolute inset-0 bg-brand-500/20 blur-xs rounded-xs opacity-50 -z-10 animate-pulse'></div>
                                <div class='relative w-full h-full aspect-square bg-black roundex-xs overflow-hidden flex items-center justify-center'>
                                    <PreviewCanvas renderFn={activeSnippet().demo} />
                                </div>

                                <div class='mt-4 flex flex-col items-center gap-1'>
                                    <div class='text-[8px] font-mono text-white/30 uppercase tracking-[0.4em]'>Rendering Loop</div>
                                    <div class='h-px w-8 bg-brand-500/30'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}
