export type Category = 'Math' | 'Graphics' | 'Input' | 'Audio' | 'Physics' | 'Utils'
export const Categories: Category[] = ['Math', 'Graphics', 'Input', 'Audio', 'Physics', 'Utils']


export type Doc = {
    id: string
    name: string
    category: Category
    group: string
    description: string
    params?: string
    example: string
}

export { DOCS } from '../docs'