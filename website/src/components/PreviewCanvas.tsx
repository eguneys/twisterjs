import { createEffect, onCleanup, onMount } from "solid-js"
import type { DemoReturn } from "./modules"


export type RenderFn = (el: HTMLElement) => Promise<DemoReturn>

export const PreviewCanvas = (props: { renderFn: RenderFn }) => {


  let destroyed = false
  onMount(() => {
    createEffect(() => {
      replace_canvas(props.renderFn)
    })

    onCleanup(() => {
      if (previous_demo) {
        el.removeChild(previous_demo.canvas)
        previous_demo.cleanup()
        previous_demo = undefined
      }
      destroyed = true
    })
  })

    let el!: HTMLDivElement

    let latest_render_fn: RenderFn | undefined
    let loading_render_fn = false
    let previous_demo: DemoReturn | undefined = undefined
    const replace_canvas = async (renderFn: RenderFn) => {

      latest_render_fn = renderFn

      if (loading_render_fn) {
        return
      }

      if (previous_demo) {
        el.removeChild(previous_demo.canvas)
        previous_demo.cleanup()
        previous_demo = undefined
      }

      loading_render_fn = true
      let render_fn = latest_render_fn
      previous_demo = await render_fn(el)

      if (destroyed) {
        previous_demo.cleanup()
        previous_demo = undefined
        return
      }


      loading_render_fn = false

      if (latest_render_fn !== render_fn) {
        replace_canvas(latest_render_fn)
      }
    }

    return (<>
    <div ref={el} class='w-full h-full flex justify-content items-center'></div>
    </>)
}
