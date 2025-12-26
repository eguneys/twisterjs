import { BatchRenderer, colors, Init_canvas, Loop } from "twisterjs"

const _update = (_delta: number) => {

}

const _render = () => {

    batch.beginFrame()

    batch.fillRect(512, 512, 1024, 1024, colors.red)

    batch.fillRoundRect(500, 100, 300, 80, 10, colors.green)

    batch.strokeRect(500, 200, 300, 80, 8, colors.orange)


    batch.fillCircle(300, 400, 60, colors.blue)
    batch.strokeCircle(800, 400, 60, 8, colors.blue)

    batch.strokeLine(100, 600, 900, 600, 2, colors.white)
    batch.strokeLine(200, 700, 900, 700, 8, colors.white)
    batch.strokeLine(300, 800, 900, 800, 16, colors.white)
    batch.strokeLine(400, 900, 800, 900, 32, colors.white)

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


export const Shapes = {
    id: 'Shapes',
    title: 'Shapes',
    description: 'Shapes',
    code: `
import { BatchRenderer, colors, Init_canvas, Loop } from "twisterjs"

const _render = () => {

    batch.beginFrame()

    batch.fillRect(512, 512, 1024, 1024, colors.red)

    batch.fillRoundRect(500, 100, 300, 80, 10, colors.green)

    batch.strokeRect(500, 200, 300, 80, 8, colors.orange)


    batch.fillCircle(300, 400, 60, colors.blue)
    batch.strokeCircle(800, 400, 60, 8, colors.blue)

    batch.strokeLine(100, 600, 900, 600, 2, colors.white)
    batch.strokeLine(200, 700, 900, 700, 8, colors.white)
    batch.strokeLine(300, 800, 900, 800, 16, colors.white)
    batch.strokeLine(400, 900, 800, 900, 32, colors.white)

    batch.endFrame()
}

let batch: BatchRenderer
async function demo(el: HTMLElement) {

    let res = Init_canvas(1024, 1024, el, _render)

    batch = res.batch
}

`,
    demo
}
