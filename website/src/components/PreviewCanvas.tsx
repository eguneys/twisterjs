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
