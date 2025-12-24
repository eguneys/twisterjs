import type { Doc } from "../components/docs";

export const Delay_Docs: Doc[] = [
    {
        id: 'Delay',
        name: 'new Delay()',
        category: 'Timing',
        group: 'Delay',
        description: 'A class for timing events',
        example: `
let d = new Delay()
d.set_line('20 spawn 800 die 100')

/* in your update loop */
d.update(delta)

if (d.action === 'spawn') {
  // this will fire once after 20 ms after 'set_line' is called
}
if (d.action === 'die') {
  // die event after 820 ms
}

if (d.action === 'end') {
 // finally end event after 920 ms
}

/* set_line can be re-used multiple times, but it will reset the previous one */
`,
}
]