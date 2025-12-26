import { AnimChannel, BatchRenderer, Color, colors, DragHandler, Init_canvas, Loop, vec2, type Vec2 } from "twisterjs"


let cursor_xy: Vec2
let color_lerp_t: AnimChannel

const _init = () => {
    cursor_xy = vec2(500, 500)
    color_lerp_t = new AnimChannel()
}

const _update = (delta: number) => {

    cursor_xy = vec2(drag.is_hovering[0], drag.is_hovering[1])

    color_lerp_t.update(delta / 1000)

    if (drag.is_just_down) {
        color_lerp_t.springTo(0)
    }
    
    if (drag.is_up) {
        color_lerp_t.springTo(1)
    }

    drag.update(delta)
}

const _render = () => {

    batch.beginFrame()

    batch.fillRect(512, 512, 1024, 1024, colors.red)

    let color = Color.lerp(colors.white, colors.blue, color_lerp_t.value)
    batch.fillRect(cursor_xy.x, cursor_xy.y, 100, 100, color)

    batch.endFrame()
}

let drag: DragHandler
let batch: BatchRenderer
const _set_ctx = (b: BatchRenderer, d: DragHandler) => {
    batch = b
    drag = d
}

async function demo(el: HTMLElement) {

    let res = Init_canvas(1024, 1024, el, _render)

    let drag = DragHandler(1024, 1024, res.canvas)

    _set_ctx(res.batch, drag)

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


export const Drag = {
    id: 'Drag',
    title: 'Mouse Controls',
    description: 'Listen to Mouse events',
    code: `
import { AnimChannel, BatchRenderer, Color, colors, DragHandler, Init_canvas, Loop, vec2, type Vec2 } from "twisterjs"


let cursor_xy: Vec2
let color_lerp_t: AnimChannel

const _init = () => {
    cursor_xy = vec2(500, 500)
    color_lerp_t = new AnimChannel()
}

const _update = (delta: number) => {

    cursor_xy = vec2(drag.is_hovering[0], drag.is_hovering[1])

    color_lerp_t.update(delta / 1000)

    if (drag.is_just_down) {
        color_lerp_t.springTo(0)
    }
    
    if (drag.is_up) {
        color_lerp_t.springTo(1)
    }

    drag.update(delta)
}

const _render = () => {

    batch.beginFrame()

    batch.fillRect(512, 512, 1024, 1024, colors.red)

    let color = Color.lerp(colors.white, colors.blue, color_lerp_t.value)
    batch.fillRect(cursor_xy.x, cursor_xy.y, 100, 100, color)

    batch.endFrame()
}

let drag: DragHandler
let batch: BatchRenderer
const _set_ctx = (b: BatchRenderer, d: DragHandler) => {
    batch = b
    drag = d
}

async function demo(el: HTMLElement) {

    let res = Init_canvas(1024, 1024, el, _render)

    let drag = DragHandler(1024, 1024, res.canvas)

    _set_ctx(res.batch, drag)

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


`,
    demo
}

