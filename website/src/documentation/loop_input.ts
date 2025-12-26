import type { Doc } from "../components/docs";

export const Loop_Input_Docs: Doc[] = [
    {
        id: 'Loop',
        name: 'Loop(update: (dt: number) => void, render: (alpha: number) => void, after_render?: () => void)',
        category: 'Utils',
        group: 'General',
        description: 'Starts a game loop',
        example: `
function _update(delta: number) {
   // gets called every frame for updating the game
}

function _render() {
   // gets called once every frame for rendering the game
}

let loop_cleanup = Loop(_update, _render)

// call loop_cleanup to stop the loop and cleanup
function _on_cleanup() {
  loop_cleanup()
}

`},
    {
        id: 'Mouse Input',
        name: 'new DragHandler(game_width: number, game_height: number, canvas: HTMLCanvasElement): DragHandler',
        category: 'Utils',
        group: 'Mouse Input',
        description: 'An object to listen for mouse events, focused on drag drop functionality.',
        example: `
 let drag = DragHandler(1920, 1080, el)
 
function _update() {
  // call update in update loop
  drag.update(delta)
  // query the mouse input
  console.log(drag.is_hovering[0], drag.is_hovering[1]) 
}
`},
]