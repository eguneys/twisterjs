import type { Doc } from "../components/docs";

export const Vec2_Docs: Doc[] = [
    {
        id: 'vec2',
        name: 'vec2(x, y)',
        category: 'Math',
        group: 'Vector 2',
        description: 'A simple object for a 2D Vector',
        example: `
let v = vec2(100, 100)
console.log(v.x, v.y) // logs 100 100
`,
    },
    { id: 'len2', name: 'len2(v: Vec2)', 
        category: 'Math',
        group: 'Vector 2',
        description: 'Returns Vector\'s length squared',
        example: `len(vec2(10, 10))` },
    { id: 'length', name: 'length(v: Vec2)', 
        category: 'Math',
        group: 'Vector 2',
        description: 'Returns Vector\'s length',
        example: `length(vec_a)` },
    { id: 'distance', name: 'distance(a: Vec2, b: Vec2)', 
        category: 'Math',
        group: 'Vector 2',
        description: 'Returns the distance between 2 Vectors',
        example: `distance(vec_a, vec_b)` },
    { id: 'distance2', name: 'distance2(a: Vec2, b: Vec2)', 
        category: 'Math',
        group: 'Vector 2',
        description: 'Returns the distance squared between 2 Vectors',
        example: `distance2(vec_a, vec_b)` },
    { id: 'normalize', name: 'normalize(v: Vec2)', 
        category: 'Math',
        group: 'Vector 2',
        description: 'Returns the Vector normalized',
        example: `normalize(vec2(10, 10))` },

        {
            id: 'normalizeSafe',
            name: 'normalizeSafe(v: Vec2)',
            category: 'Math',
        group: 'Vector 2',
            description: 'Returns the Vector normalized but zero Vector when length is zero',
            example: 'normalizeSafe(vec_a)'
        },

        { id: 'fromAngle', 
            name: 'fromAngle(theta: number)',
            category: 'Math',
        group: 'Vector 2',
            description: 'Creates a vector directed towards angle theta (in radians)',
            example: 'fromAngle(Math.PI * 0.25)'
        },

    {
        id: 'add',
        name: 'add(a: Vec2,b: Vec2)',
        category: 'Math',
        group: 'Vector 2',
        description: 'Adds two vectors',
        example: 'add(vec_a, vec_b)'
    },
    {
        id: 'sub',
        name: 'sub(a: Vec2,b: Vec2)',
        category: 'Math',
        group: 'Vector 2',
        description: 'Subtracts two vectors',
        example: 'sub(vec_a, vec_b)'
    },
    {
        id: 'mulScalar',
        name: 'mulScalar(v: Vec2,s: number)',
        category: 'Math',
        group: 'Vector 2',
        description: 'Multiplies vector by a scalar',
        example: 'mulScalar(vec_a, 10)'
    },
    {
        id: 'dot',
        name: 'dot(a: Vec2,b: Vec2)',
        category: 'Math',
        group: 'Vector 2',
        description: 'Dot product of two vectors',
        example: 'dot(vec_a, vec_b)'
    },
    {
        id: 'mul',
        name: 'mul(a: Vec2,b: Vec2)',
        category: 'Math',
        group: 'Vector 2',
        description: 'Multiplies two vectors',
        example: 'mul(vec_a, vec_b)'
    },
    {
        id: 'perp',
        name: 'perp(a: Vec2)',
        category: 'Math',
        group: 'Vector 2',
        description: 'Returns the perpendicular Vector of the Vector',
        example: 'perp(vec_a)'
    },
    {
        id: 'project',
        name: 'project(a: Vec2, target: Vec2)',
        category: 'Math',
        group: 'Vector 2',
        description: 'Projects Vector a onto Vector b',
        example: 'project(vec_a, vec_b)'
    },

    {

        id: 'clampLength',
        name: 'clampLength(a: Vec2, max: number, min = 0)',
        category: 'Math',
        group: 'Vector 2',
        description: 'Clamps the Vector between max and min values',
        example: 'clampLength(vec(100, 50), 75, 10)'
    },

    {

        id: 'rotateVec2',
        name: 'rotateVec2(v: Vec2, theta: number)',
        category: 'Math',
        group: 'Vector 2',
        description: 'Rotate the Vector by theta amount (theta in radians)',
        example: 'rotateVec2(vec2(100, 0), Math.PI * 0.5)'
    }
]
