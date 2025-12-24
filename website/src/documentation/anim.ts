import type { Doc } from "../components/docs";

export const Anim_Docs: Doc[] = [
    {
        id: 'AnimChannel',
        name: 'new AnimChannel(startValue: number)',
        category: 'Animation',
        group: 'AnimChannel',
        description: 'A class for animating a value',
        example: `
let x = new AnimChannel()

/* Animate 'x.value' to 100 in a Spring Motion
x.springTo(100, { stiffness: 100, damping: 10 })

/* call update with passed seconds on each frame */
x.update(delta / 1000)

console.log(x.value) // x.value animates on each render
`}
]