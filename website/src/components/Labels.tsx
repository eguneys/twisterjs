import { For } from "solid-js"


const Labels = [
    { label: 'Language', val: 'Typescript / esnext'},
    { label: 'Payload', val: 'Tiny Modular'},
    { label: 'Design', val: 'Indie / AI'},
    { label: 'Animation', val: 'Spring'},
    { label: 'Timing', val: 'Delay'},
    { label: 'AI', val: 'Steering Behaviors'},
    { label: 'Math', val: 'Vec2 / Rect'},
    { label: 'Rendering', val: 'Shapes with Batched WebGL'},
]

export const LabelsView = () => {
    return (<>
        <For each={Labels}>{item =>
            <div class='text-center md:text-left'>
                <span class='block text-[8px] font-black text-brand-500 uppercase tracking[0.2em] mb-1'>{item.label}</span>
                <span class='block text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tighter'>{item.val}</span>
            </div>

        }</For>
    </>)
}