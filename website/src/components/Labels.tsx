import { For } from "solid-js"


const Labels = [
    { label: 'Payload', val: 'Tiny Modular'},
    { label: 'Design', val: 'Indie'},
    { label: 'Animation', val: 'Spring'},
    { label: 'Timing', val: 'Delay'},
    { label: 'AI', val: 'Steering Behaviors'},
    { label: 'Math', val: 'Vec2 / Polygon'},
    { label: 'Rendering', val: 'Batched WebGL'},
]

export const LabelsView = () => {
    return (<>
        <For each={Labels}>{item =>
            <div class='text-center md:text-left'>
                <span class='block text-[8px] font-black text-[#5f6fff] uppercase tracking[0.2em] mb-1'>{item.label}</span>
                <span class='block text-xl font-bold text-gray-900 tracking-tighter'>{item.val}</span>
            </div>

        }</For>
    </>)
}