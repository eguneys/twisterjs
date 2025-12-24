import { createMemo, createSignal, For, Show } from "solid-js"
import { Categories, type Category, type Doc } from "./docs"
import { DOCS } from '../documentation'
import { CodeHighlight } from "./CodeHighlight"


export const Cheatsheet = () => {

    const [activeCat, setActiveCat] = createSignal<Category | 'All'>('All')

    const [search, setSearch] = createSignal('')

    type FilteredDocs = Record<Category, Record<string, Doc[]>>

    const filteredDocs = createMemo<FilteredDocs>(() => {

        let res: Partial<FilteredDocs> = {}

        let filtered = DOCS.filter(doc => {

            const matchesSearch = doc.name.toLowerCase().includes(search().toLowerCase()) ||
            doc.description.toLowerCase().includes(search().toLowerCase()) ||
            doc.group.toLowerCase().includes(search().toLowerCase())

            const matchesCat = activeCat() === 'All' || doc.category === activeCat()

            return matchesSearch && matchesCat
        })


        filtered.forEach(doc => {
            
            if (!res[doc.category]) {
                res[doc.category] = {}
            }

            const category_group = res[doc.category]!

            if (!category_group[doc.group]) {
                category_group[doc.group] = []
            }
            category_group[doc.group].push(doc)
        })
        return res as FilteredDocs
    })

    const [collapsedGroups, setCollapsedGroups] = createSignal(new Set(), { equals: false })

    const toggleGroup = (cat: Category, group_name: string) => {

        let groups = collapsedGroups()
        let key = `${cat}-${group_name}`
        let value = groups.has(key)
        if (!value) {
            groups.add(key)
        } else {
            groups.delete(key)
        }
        setCollapsedGroups(groups)
    }

    const isCollapsed = (cat: Category, group_name: string) => {
        return collapsedGroups().has(`${cat}-${group_name}`)
    }

    const categories = createMemo<Category[]>(() => Object.keys(filteredDocs()) as Category[])

    return (<>
        <div class='max-w-6xl mx-auto pt-20 pb-8 px-4'>
            <div class='flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4'>
                <h2 class='text-xl font-bold tracking-tight'>API Reference</h2>
                <div class='flex gap-1 overflow-x-auto pb-1 scrollbar-hide'>
                    <For each={['All', ...Categories]}>{cat =>
                        <button onClick={() => setActiveCat(cat as any)}

                            class={`px-3 py-1 rounded-xs text-[9px] font-bold uppercase tracking-wider transition-all border ${activeCat() === cat ? 'bg-[#1a1a1a] text-white border-black' : 'bg-white text-gray-400 border-gray-100'}`}
                        >
                            {cat}
                        </button>
                    }</For>
                </div>
            </div>

            <div class='mb-6'>
                <input type='text' placeholder='Filter API Surface...' class='w-full bg-gray-50 border border-gray-100 rounded-xs px-3 py-2 text-xs outline-none focus:border-[#5f6fff] transition-all'

                    value={search()}
                    onChange={(e) => setSearch(e.target.value)}
                >
                </input>
            </div>

            <div class='space-y-8'>
                <For each={categories()}  fallback={
                                <div class='text-center py-12 text-gray-400 text-xs italic'>
                                    No functions found matching your criteria.
                                </div>
                            }>{cat =>
                    <div class='animate-in fade-in duration-300'>
                        <h3 class='text-[10px] font-black uppercase tracking-[0.3em] text-[#5f6fff] mb-4 border-b border-[#5f6fff]/10 pb-1'>
                            {cat}
                        </h3>
                        <div class='space-y-6'>
                            <For each={Object.entries(filteredDocs()[cat])} fallback={
                                <div class='text-center py-12 text-gray-400 text-xs italic'>
                                    No functions found matching your criteria.
                                </div>
                            }>{([group_name, docs]) =>
                                <div class='pl-2 border-l border-gray-100 transition-all'>
                                    <button
                                    
                                    onClick={() => toggleGroup(cat, group_name)}
                                    class='group/header w-full flex items-center justify-between py-1 px-2 rounded-md hover:bg-gray-100/50 transition-colors mb-2 text-left'
                                    >
                                        <div class='flex items-center gap-2'>
                                            <span class={`w-1.5 h-1.5 rounded-full transition-colors ${isCollapsed(cat, group_name) ? 'bg-gray-300' : 'bg-[#5f6fff]'}`}></span>
                                            <h4 class={`text-[11px] font-bold transition-colors ${isCollapsed(cat, group_name) ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {group_name}
                                            </h4>
                                        </div>
                                    </button>
                                    <Show when={!isCollapsed(cat, group_name)}>

                                    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                                    <For each={docs}>{doc =>
                                        <div class='group p-3 bg-white border border-gray-100 rounded-xs hover:border-[#5f6fff] transition-all'>
                                            <div class='flex justify-between items-center mb-1'>
                                                <span class='text-[8px] font-black text-[#5f6fff] uppercase tracking-tighter'>
                                                    {doc.category}
                                                </span>
                                            </div>
                                            <div class='relative group/name mb-0.5'>
                                            <h3 class='text-xs font-bold mb-0.5 mono group-hover:text-[#5f6fff] truncate'>{doc.name}</h3>
                                            {/* Tooltip for long names */}
                                            <div class='absolute bottom-full left-0 mb-2 invisible group-hover/name:visible opacity-0 group-hover/name:opacity-100 transition-all bg-[#1a1a1a] text-white text-[10px] py-1 px-2 rounded-xs shadow-2xl whitespace-nowrap z-60 pointer-events-none transform translate-y-1 group-hover/name:translate-y-0'>
                                            {doc.name}
                                            <div class='absolute top-full left-2 -mt-1 border-4 border-transparent border-t-[#1a1a1a]'></div>
                                            </div>
                                            </div>
                                            <p class="text-gray-400 text-[10px] mb-2 leading-tight h-6 overflow-hidden line-clamp-2">{doc.description}</p>
                                            <div class='bg-gray-700 p-2 rounded-xs border border-gray-50/50'>
                                            {/*
                                                <code class='text-[10px] mono text-gray-600 block truncate whitespace-pre-wrap'>
                                                    {doc.example.trim()}
                                                </code>
                                                */}
                                                <CodeHighlight class='text-[10px] mono block truncate whitespace-pre-wrap' code={doc.example.trim()}/>
                                            </div>
                                        </div>
                                    }</For>
                                    </div>
                                    </Show>
                                </div>
                                }</For>
                        </div>
                    </div>
                }</For>
            </div>
        </div>
    </>)
}