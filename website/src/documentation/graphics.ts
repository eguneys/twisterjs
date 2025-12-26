import type { Doc } from "../components/docs";

export const Graphics_Docs: Doc[] = [
    {
        id: 'BatchRenderer',
        name: 'BatchRenderer',
        category: 'Graphics',
        group: 'Renderer',
        description: 'A class for drawing simple shapes using WebGL with Batched Rendering',
        example: `
// BatchRenderer is obtained through an Init_canvas
let  { batch } = Init_canvas(/* */)


/* draw each frame in your render function */

    batch.beginFrame()

    /* draw your shapes here */
    batch.fillRect(/* */)
     
    batch.endFrame()
`},
    {
        id: 'Init_canvas',
        name: 'Init_canvas(game_width: number, game_height: number, el: HTMLElement, _render: () => void): void',
        category: 'Graphics',
        group: 'Renderer',
        description: 'A function to create a canvas, append to the DOM, and enable drawing with BatchRenderer',
        example: `
import { Init_canvas } from 'twisterjs'

let el: HTMLElement = document.getElementById('app')!

let { batch, canvas, cleanup } = Init_canvas(1920, 1080, el, _render)

function _render() {
  // draw using batch
}

function _on_cleanup() {
  // call cleanup to destroy the WebGL context
  cleanup()
}


// canvas is already appended to el and canvas gets resized automatically to el bounds.

// style your canvas to fit within your el bounds
/*
canvas.twisterjs-responsive-full {
  width: 100%;
  height: 100%;
  background-color: transparent;
  touch-action: none;
  pointer-events: all;
  display: block;
}
*

`},
    {
        id: 'AppendAsyncGameToDomManager',
        name: 'AppendAsyncGameToDomManager',
        category: 'Graphics',
        group: 'Integration',
        description: 'A manager to append your game canvas to DOM safely with cleanup',
        example: `
  const renderFn = async () => {
    let { canvas, cleanup } = Init_canvas(...)

    // load your game

    const _on_cleanup = () => {
       // your cleanup logic here
       cleanup()
    }

    return {
      canvas,
      cleanup: _on_cleanup
    }
  }

  /** Sample demonstration through SolidJS API **/
  onMount(() => {
      let { on_new_renderFn, on_destroy }= AppendAsyncGameToDomManager(el)

      createEffect(() => {
        // renderFn could be a reactive property
        // so that on_new_renderFn gets called on every change
        // it's safe because cleanup will happen accordingly
        on_new_renderFn(renderFn)
      })

      onCleanup(() => {
        on_destroy()
      })
  })
`},


]