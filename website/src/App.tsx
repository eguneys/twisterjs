import { createEffect, createSignal, Show } from "solid-js"
import { Hero } from "./components/Hero"
import { Cheatsheet } from "./components/Cheatsheet"
import { LabelsView } from "./components/Labels"
import { Header } from "./components/Header"
import { makePersisted } from "@solid-primitives/storage"
import { ExampleGallery } from "./components/ExampleGallery"

export type Section = 'landing' | 'cheatsheet'

export default function App() {

  const [section, set_section] = createSignal<Section>('landing')

  const navigate = (s: Section) => {
    set_section(s)
  }

  const [isDark, setIsDark] = makePersisted(createSignal(window.matchMedia('(prefers-color-scheme: dark)').matches), {
    name: '.twisterjs.theme.is-dark'
  })

  createEffect(() => {
    if (isDark()) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  })

  return (<>
  <div class={`min-h-screen transition-colors duration-300 ${isDark() ? 'dark': ''} `}>
    <Header currentSection={section()} onNavigate={navigate} isDark={isDark()} onToggleTheme={() => setIsDark(!isDark())}/>
    <main class='transition-all duration-300'>
      <Show when={section()==='landing'}>
        <Hero onExplore={() => navigate('cheatsheet')}/>
        <section class='bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 py-12 transition-colors'>
          <div class='max-w-6xl mx-auto px-4'>
            <div class='grid grid-cols-2 md:grid-cols-4 gap-6'>
              <LabelsView/>
            </div>
          </div>
        </section>
        <section class='transition-colors'>
          <ExampleGallery/>
        </section>
        <section class='bg-zinc-50/50 dark:bg-zinc-950/50 border-t border-zinc-100 dark:border-zinc-800 transition-colors'>
          <Cheatsheet/>
        </section>
      </Show>
      <Show when={section()==='cheatsheet'}>
        <Cheatsheet/>
      </Show>
    </main>
    <footer class='py-10 border-t border-zinc-50 dark:border-zinc-900 text-center bg-white dark:bg-zinc-950 transition-colors'>
      <p class='text-[9px] font-bold tracking-[0.3em] text-zinc-300 dark:text-zinc-700 uppercase'>
        TwisterJS &bull; Tailored for the Indie &bull; 2026
      </p>
    </footer>
  </div>
    </>)
}