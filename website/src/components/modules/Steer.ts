import { BatchRenderer, Color, Init_canvas, Loop } from "twisterjs"

const _update = (_delta: number) => {

}

const _render = () => {

    batch.beginFrame()

    batch.fillRect(0, 0, 1920, 1080, Color.red)

    batch.endFrame()
}

let batch: BatchRenderer
const _set_ctx = (b: BatchRenderer) => {
    batch = b
}

async function demo(el: HTMLElement) {

    let res = Init_canvas(1024, 1024, el, _render)

    _set_ctx(res.batch)
    
    let loop_cleanup = Loop(_update, _render)

    return {
        canvas: res.canvas,
        cleanup: () => {
            res.cleanup()
            loop_cleanup()
        }
    }
}


export const Steering = {
    id: 'Steering',
    title: 'Steering',
    description: 'Steering',
    code: `
`,
    demo
}
