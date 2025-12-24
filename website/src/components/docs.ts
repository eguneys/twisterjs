export type Category = 'Math' | 'Timing' | 'Animation' | 'Graphics'
export const Categories: Category[] = ['Math', 'Timing', 'Animation', 'Graphics']


export type Doc = {
    id: string
    name: string
    category: Category
    group: string
    description: string
    params?: string
    example: string
}

export { DOCS } from '../documentation'