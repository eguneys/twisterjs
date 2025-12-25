import { BatchRenderer, colors, Init_canvas, Loop, rotateVec2, vec2 } from "twisterjs"

let time: number

const _init = () => {
    time = 0
}

const _update = (delta: number) => {

    time += delta / 1000
}

const _render = () => {

    batch.beginFrame()

    batch.strokeRect(1024 / 2, 1024 / 2, 1024, 1024, 1, colors.white)
    batch.fillRect(1024 / 2, 1024 / 2, 1024 - 1, 1024 - 1, colors.darkblue)

    let A = vec2(500, 500)
    let B = vec2(900, 900)

    let theta = Math.sin(time) * Math.PI * 2
    B = rotateVec2(B, theta)

    batch.strokeLine(A.x, A.y, B.x, B.y, 1, colors.pink)


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


export const Welcome = {
    id: 'Welcome',
    title: 'Import as esnext module',
    description: 'Hey fellow indie, TwisterJS is only available as an esnext module.',
    code: `
import { TwisterJS } from 'twisterjs'

console.log(TwisterJS) // logs TwisterJS
`,
    demo
}
