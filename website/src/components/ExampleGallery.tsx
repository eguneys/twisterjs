import { For } from "solid-js"

export type ExampleProject = {

    tags: string[]
    year: number
    url: string
    title: string
    author: string
}

export const Example_Projects: ExampleProject[] = [
    {
        author: 'twitch.tv/gsoutz',
        title: 'Mor Chess 3',
        tags: ['puzzle', 'chess', 'minimalist', 'daily'],
        year: 2026,
        url: 'https://morchess.com/'
    }
]


export const ExampleGallery = () => {

    return (<>
        <div class='max-w-6xl mx-auto py-20 px-4'>
            <div class='flex items-center gap-4 mb-10'>
                <div class='h-px flex-1 bg-zinc-100 dark:bg-zinc-800'></div>
                <div class='text-center'>
                    <h2 class='text-xl font-bold tracking-tight dark:text-zinc-100'>Community Showreel</h2>
                    <p class='text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.2em] mt-1'>Real projects built with TwisterJS</p>
                </div>
                <div class='h-px flex-1 bg-zinc-100 dark:bg-zinc-800'></div>
            </div>

            <div class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                <For each={Example_Projects}>{project =>
                    <a href={project.url} target='_blank' rel='noopener noreferrer'
                        class='group relative bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-6 roundex-xs transition-all hover:border-brand/40 hover:shadow-xs hover:-translate-y-1'
                    >
                        <div class='flex justify-between items-start mb-4'>
                            <span class='text-[9px] font-mono text-zinc-500 dark:text-zinc-700'>{project.year}</span>
                            <div class='flex gap-1'>
                                <For each={project.tags}>{tag =>
                                    <span class='text-[8px] px-1.5 py-0.5 bg-zinc-50 dark:bg-zinc-950 text-zinc-400 dark:text-zinc-500 rounded-xs border border-zinc-200 dark:bordre-zinc-800 font-bold uppercase tracking-wider'>
                                        {tag}
                                    </span>
                                }</For>
                            </div>
                        </div>

                        <h3 class='text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-brand-500 transition-colors'>
                            {project.title}
                        </h3>
                        <p class='text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mt-1'>
                            by {project.author}
                        </p>

                        <div class='mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-500 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0'>
                            See Game
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </a>
                }</For>
            </div>
        </div>
    </>)
}