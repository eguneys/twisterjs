import { createSignal, For, Show } from "solid-js"
import { Hero } from "./components/Hero"
import { Cheatsheet } from "./components/Cheatsheet"
import { LabelsView } from "./components/Labels"

type Section = 'landing' | 'cheatsheet'

export default function App() {

  const [section, set_section] = createSignal<Section>('landing')

  const navigate = (s: Section) => {
    set_section(s)
  }

  return (<>
  <div class="min-h-screen selection:bg-[#5f6fff] selection:text-white bg-[#fcfcfc]">
    <Header currentSection={section()} onNavigate={navigate}/>
    <main class='transition-all duration-300'>
      <Show when={section()==='landing'}>
        <Hero onExplore={() => navigate('cheatsheet')}/>
        <section class='bg-white border-t border-gray-100 py-12'>
          <div class='max-w-6xl mx-auto px-4'>
            <div class='grid grid-cols-2 md:grid-cols-4 gap-6'>
              <LabelsView/>
            </div>
          </div>
        </section>
        <section class='bg-gray-50/50 border-t border-gray-100'>
          <Cheatsheet/>
        </section>
      </Show>
      <Show when={section()==='cheatsheet'}>
        <Cheatsheet/>
      </Show>
    </main>
    <footer class='py-10 border-t border-gray-50 text-center bg-white'>
      <p class='text-[9px] font-bold tracking-[0.3em] text-gray-300 uppercase'>
        TwisterJS &bull; Tailored for the Indie &bull; 2026
      </p>
    </footer>
  </div>
    </>)
}


const Header = (props: { currentSection: Section, onNavigate: (s: Section) => void }) => {

  type Link = { id: Section, label: string }
  const Links: Link[] = [{ id: 'landing', label: 'Start'}, { id: 'cheatsheet', label: 'Docs'}]

  return (<>
  <nav class='fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center'>
  <div class='text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2' onClick={() => props.onNavigate('landing')}>
    <div class="w-4 h-4 bg-[#5f6fff] rounded-[1px]"></div>
      TwisterJS
    </div>
    <div class='flex gap-8 text-sm font-medium uppercase tracking-widest'>
          <For each={Links}>{link =>
            <button onClick={() => props.onNavigate(link.id)} class={`transition-colors hover:text-[#5f6fff]' ${props.currentSection === link.id ? 'text-[#5f6fff]' : 'text-gray-400'}`}>
              {link.label}
            </button>
          }</For>
    </div>
  </nav>
  </>)
}