export type DemoReturn = {
  canvas: HTMLCanvasElement,
  cleanup: () => void
}

export type RenderFn = (el: HTMLElement) => Promise<DemoReturn>

export type AppendAsyncGameToDomManager = {
  on_new_renderFn(renderFn: RenderFn): void
  on_destroy(): void
}

export function AppendAsyncGameToDomManager(el: HTMLElement): AppendAsyncGameToDomManager {

  const on_new_renderFn = (renderFn: RenderFn) => {
    replace_canvas(renderFn)
  }

  const on_destroy = () => {
    if (previous_demo) {
      el.removeChild(previous_demo.canvas)
      previous_demo.cleanup()
      previous_demo = undefined
    }
    destroyed = true

  }

  let res: AppendAsyncGameToDomManager = {
    on_new_renderFn,
    on_destroy
  }

  let destroyed = false

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

  return res
}