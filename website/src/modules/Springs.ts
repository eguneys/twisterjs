import { BatchRenderer, Delay, Init_canvas, Loop } from "twisterjs"

import { AnimChannel, colors, vibrant } from 'twisterjs';

let x: AnimChannel
let y: AnimChannel
let z: AnimChannel
let q: AnimChannel

let d: Delay

function _init() {
  
    x = new AnimChannel().springTo(300, { stiffness: 200, damping: 10 })
    y = new AnimChannel().springTo(500, { stiffness: 100, damping: 5 })
    z = new AnimChannel(300)
    q = new AnimChannel(300)

    z.springTo(0)
    q.springTo(100, { stiffness: 1000, damping: 10 })

    d = new Delay().set_line(`2000 pong`)
}

const ping = () => {

    x.springTo(300, { stiffness: 200, damping: 10 })
    y.springTo(500, { stiffness: 100, damping: 5 })

    z.springTo(0)
    q.springTo(0, { stiffness: 1000, damping: 10 })
}
const pong = () => {

    x.springTo(0, { stiffness: 200, damping: 10 })
    y.springTo(0, { stiffness: 100, damping: 5 })

    z.springTo(300)
    q.springTo(300, { stiffness: 1000, damping: 10 })
}

function _update(delta: number) {

    x.update(delta / 1000)
    y.update(delta / 1000)
    z.update(delta / 1000)
    q.update(delta / 1000)

    d.update(delta)

    if (d.action === 'ping') {
        d.set_line('2000 pong')
        ping()
    } else if (d.action === 'pong') {
        d.set_line('2000 ping')
        pong()
    }
}


const _render = () => {

    batch.beginFrame()

    batch.strokeRect(1024 / 2, 1024 / 2, 1024 - 1, 1024 - 1, 1, colors.white)

    batch.fillRect(1024/ 2 + y.value, 200, 1024, 1024, colors.green)
    batch.fillRect(1024/ 2 + x.value, 0, 1024, 1024, colors.blue)

    batch.fillRect(1024/ 2 - 256, 1024 / 2 + 300 + z.value, 512, 512, colors.orange)
    batch.fillRect(1024/ 2 - 256, 1024 / 2 + 0 + q.value, 256, 256, vibrant.white)

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


export const Springs = {
    id: 'Spring',
    title: 'Spring',
    description: 'Using springs instead of tweening adds life and removes stiffness.',
    code: `
import { AnimChannel, 
         colors } from 'twisterjs';

let x: AnimChannel

function _init() {
  
    x = new AnimChannel()
                 .springTo(300, { 
                       stiffness: 200, 
                       damping: 10 
                    })
}

function _update(delta: number) {
    x.update(delta / 1000)
}


const _render = () => {
    batch.beginFrame()

    batch.fillRect(x.value, 
        0, 
        1024, 1024, 
        colors.blue)

    batch.endFrame()
}
`,
    demo
}
