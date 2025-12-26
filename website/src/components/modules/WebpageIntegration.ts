import { BatchRenderer, colors, Init_canvas, Loop } from "twisterjs"

const _update = (_delta: number) => {

}

const _render = () => {

    batch.beginFrame()

    batch.fillRect(512, 512, 1024, 1024, colors.blue)
    batch.fillRect(0, 0, 1024, 1024, colors.red)

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


export const WebpageIntegration = {
    id: 'Webpage Integration',
    title: 'Add to a Webpage',
    description: 'A manager to add your game into your webpage and cleanup after it.',
    code: `
/**
 * This example uses Solid.JS Integration on how to append your game canvas to a webpage
 * safely so it cleans up after leaving or replacing the page
 */

import { createEffect, onCleanup, onMount } from "solid-js"
import { AppendAsyncGameToDomManager, type RenderFn } from "twisterjs"


export const PreviewCanvas = (props: { renderFn: RenderFn }) => {


  onMount(() => {
    let { on_new_renderFn, on_destroy }= AppendAsyncGameToDomManager(el)

    createEffect(() => {
      on_new_renderFn(props.renderFn)
    })

    onCleanup(() => {
      on_destroy()
    })
  })

  let el!: HTMLDivElement

  return (<>
    <div ref={el} class='w-full h-full flex justify-content items-center'></div>
  </>)
}


// Usage of PreviewCanvas

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

const MyGamePage = () => {

   return (<>
     <PreviewCanvas renderFn={demo}/>
   </>)
}


// Note: If you are using the Init_canvas to obtain the canvas;
// The Canvas is always automatically resized to parent element's bounds
// So you should style the canvas as such

/*
canvas.twisterjs-responsive-full {
  width: 100%;
  height: 100%;
  background-color: transparent;
  touch-action: none;
  pointer-events: all;
  display: block;
}
*/
`,
    demo
}
