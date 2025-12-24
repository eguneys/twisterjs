import { BatchRenderer } from "./BatchRenderer"
import { Renderer } from "./renderer"

export type InitCanvas = {
    batch: BatchRenderer
    canvas: HTMLCanvasElement
    cleanup: () => void
}

export function Init_canvas(game_width: number, game_height: number, container: HTMLElement, _render: () => void): InitCanvas {

    let canvas = document.createElement('canvas')
    canvas.classList.add('twisterjs-responsive-full')

    const resizeToContainer = () => {
        const dpr = window.devicePixelRatio || 1

        const rect = container.getBoundingClientRect()

        const targetWidth = Math.floor(rect.width * dpr)
        const targetHeight = Math.floor(rect.height * dpr)


        if (canvas.width !== targetWidth || canvas.height !== targetHeight) {

            canvas.width = targetWidth
            canvas.height = targetHeight
            renderer.set_viewport(canvas.width, canvas.height)
            _render()
        }
    }



    const renderer = new Renderer(game_width, game_height, canvas, 32_768)
    renderer.setupInstancing()

    let batch = new BatchRenderer(renderer, 16_384)


    const resizeObserver = new ResizeObserver(() => {
        resizeToContainer()
    })

    resizeObserver.observe(container)

    container.appendChild(canvas)

    return {
        canvas,
        batch,
        cleanup() {
            renderer.cleanup()
            resizeObserver.unobserve(container)
        }
    }
}