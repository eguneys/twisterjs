import { BatchRenderer, Init_canvas, Loop, vibrant } from "twisterjs"
import { AnimChannel, Delay as TDelay } from 'twisterjs'

let x: AnimChannel

let delay: TDelay

const _init = () => {

    x = new AnimChannel()
    delay = new TDelay().set_line('1000 jump 200 land 80')
}

const _update = (delta: number) => {
    delay.update(delta)

    if (delay.action === 'jump') {
        x.springTo(1000)
    }
    if (delay.action === 'land') {
        x.springTo(900)
    }
    if (delay.action === 'end') {
        x.springTo(0)
        delay.set_line('1000 jump 200 land 80')
    }

    x.update(delta / 1000)
}

const _render = () => {

    batch.beginFrame()

    batch.fillRect(x.value, 0, 100, 100, vibrant.blue)

    batch.endFrame()
}

let batch: BatchRenderer
const _set_ctx = (b: BatchRenderer) => {
    batch = b
}

async function demo(el: HTMLElement) {

    let res = Init_canvas(1024, 1024, el, _render)

    _set_ctx(res.batch)

    _init()
    
    let loop_cleanup = Loop(_update, _render)

    return {
        canvas: res.canvas,
        cleanup: () => {
            res.cleanup()
            loop_cleanup()
        }
    }
}


export const Delay = {
    id: 'Delay',
    title: 'Delay',
    description: 'Delay',
    code: `
import { AnimChannel, Delay } from 'twisterjs'

let x: AnimChannel

let delay: Delay

const _init = () => {

    x = new AnimChannel()
    delay = new Delay()
             .set_line('1000 jump 200 land 80')
}

const _update = (delta: number) => {
    delay.update(delta)

    if (delay.action === 'jump') {
        x.springTo(1000)
    }
    if (delay.action === 'land') {
        x.springTo(900)
    }
    if (delay.action === 'end') {
        x.springTo(0)
        delay.set_line('1000 jump 200 land 80')
    }

    x.update(delta / 1000)
}

function _render() {

   batch.beginFrame()
   batch.fillRect(x.value, 0, 100, 100, vibrant.blue)
   batch.endFrame()
}
`,
    demo
}
