import type { Doc } from "../components/docs";

export const Rect_Docs: Doc[] = [
    {
        id: 'rect',
        name: 'rect(x, y, w, h)',
        category: 'Math',
        group: 'Rectangle',
        description: 'A simple Rectangle object',
        example: `
let r = rect(0, 0, 100, 100)
console.log(r.xy.x, r.xy.y, r.wh.x, r.wh.y) // logs 0, 0, 100, 100
`,
    },

{ id: 'rect_left', name: 'rect_left(r: Rect)',

    category: 'Math',
    group: 'Rectangle',
    description: 'Returns left of the rectangle',
    example: `rect_left(rect(10, 0, 100, 100)) // Returns 10`
 },
{ id: 'rect_right', name: 'rect_right(r: Rect)',

    category: 'Math',
    group: 'Rectangle',
    description: 'Returns right of the rectangle',
    example: `rect_right(rect_a)`
 },
{ id: 'rect_top', name: 'rect_top(r: Rect)',

    category: 'Math',
    group: 'Rectangle',
    description: 'Returns top of the rectangle',
    example: `rect_top(rect_a)`
 },
{ id: 'rect_bottom', name: 'rect_bottom(r: Rect)',

    category: 'Math',
    group: 'Rectangle',
    description: 'Returns bottom of the rectangle',
    example: `rect_bottom(rect_a)`
 },
{ id: 'rect_abcd', name: 'rect_abcd(r: Rect): [Vec2, Vec2, Vec2, Vec2]',

    category: 'Math',
    group: 'Rectangle',
    description: 'Returns corners of the Rectangle',
    example: `rect_abcd(rect_a)`
 },
{ id: 'box_intersect', name: 'box_intersect(a: Rect, b: Rect): boolean',

    category: 'Math',
    group: 'Rectangle',
    description: 'Returns whether two boxes intersect',
    example: `box_intersect(rect_a, rect_b)`
 },
{ id: 'box_intersect_ratio', name: 'box_intersect_ratio(a: Rect, b: Rect): number',

    category: 'Math',
    group: 'Rectangle',
    description: 'Returns the ratio of intersection of box a to box b',
    example: `box_intersect_ratio(rect_a, rect_b)`
 },
]