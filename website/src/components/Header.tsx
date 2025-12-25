import { For, Show } from "solid-js"
import type { Section } from "../App"

export const Header = (props: { currentSection: Section, onNavigate: (s: Section) => void, isDark: boolean, onToggleTheme: () => void }) => {

  type Link = { id: Section, label: string }
  const Links: Link[] = [{ id: 'landing', label: 'Start'}, { id: 'cheatsheet', label: 'Docs'}]

  return (<>
  <nav class='fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800 px-6 py-4 flex justify-between items-center transition-colors'>
  <div class='text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2 text-zinc-900 dark:text-white' onClick={() => props.onNavigate('landing')}>
    <div class="w-4 h-4 bg-brand-500 rounded-[1px]"></div>
      TwisterJS
    </div>


    <div class='flex items-center gap-8'>
    <div class='flex gap-8 text-sm font-medium uppercase tracking-widest'>
          <For each={Links}>{link =>
            <button onClick={() => props.onNavigate(link.id)} 
                          class={`transition-colors hover:text-[#5f6fff]' ${props.currentSection === link.id ? 'text-brand-500' : 'text-zinc-400 dark:text-zinc-500'}`}>
              {link.label}
            </button>
          }</For>
    </div>


    <button
    onClick={props.onToggleTheme}
    class='p-2 roundex-xs hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-colors text-zinc-400 dark:text-zinc-500 hover:text-brand' aria-label='Toggle theme'>
        <Show when={props.isDark} fallback={
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
        }>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
        </Show>
    </button>
          </div>
  </nav>
  </>)
}