import { createMemo, createSignal, For } from "solid-js"
import { Categories, DOCS, type Category } from "./docs"


export const Cheatsheet = () => {

    const [activeCat, setActiveCat] = createSignal<Category | 'All'>('All')

    const [search, setSearch] = createSignal('')

    const filteredDocs = createMemo(() => {
        return DOCS.filter(doc => {

            const matchesSearch = doc.name.toLowerCase().includes(search().toLowerCase()) ||
            doc.description.toLowerCase().includes(search().toLowerCase())

            const matchesCat = activeCat() === 'All' || doc.category === activeCat()

            return matchesSearch && matchesCat
        })
    })

    return (<>
    <div class='max-w-6xl mx-auto pt-20 pb-8 px-4'>
        <div class='flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4'>
            <h2 class='text-xl font-bold tracking-tight'>API Quick Reference</h2>
            <div class='flex gap-1 overflow-x-auto pb-1 scrollbar-hide'>
                <For each={['All', ...Categories]}>{ cat => 
                <button onClick={() => setActiveCat(cat as any)} 
                
                class={`px-3 py-1 rounded-xs text-[9px] font-bold uppercase tracking-wider transition-all border ${activeCat() === cat ? 'bg-[#1a1a1a] text-white border-black' : 'bg-white text-gray-400 border-gray-100'}`}
                >
                    {cat}
                </button>
                }</For>
            </div>
        </div>

        <div class='mb-4'>
            <input type='text' placeholder='Search...' class='w-full bg-gray-50 border border-gray-100 rounded-xs px-3 py-2 text-xs outline-none focus:border-[#5f6fff] transition-all'
            
            value={search()}
            onChange={(e) => setSearch(e.target.value)}
            >
            </input>
        </div>


        <div class='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            <For each={filteredDocs()}>{ doc => 
               <div class='group p-3 bg-white border border-gray-100 rounded-xs hover:border-[#5f6fff] transition-all'>
                <div class='flex justify-between items-center mb-1'>
                    <span class='text-[8px] font-black text-[#5f6fff] uppercase tracking-tighter'>
                        {doc.category}
                    </span>
                </div>
                <h3 class='text-xs font-bold mb-0.5 mono group-hover:text-[#5f6fff] truncate'>{doc.name}</h3>
                <p class="text-gray-400 text-[10px] mb-2 leading-tight h-6 overflow-hidden line-clamp-2">{doc.description}</p>
                <div class='bg-gray-50 p-2 rounded-xs border border-gray-50/50'>
                   <code class='text-[10px] mono text-gray-600 block truncate'>
                    {doc.example}
                   </code>
                </div>
               </div>
                
            }</For>
        </div>
    </div>
    </>)
}