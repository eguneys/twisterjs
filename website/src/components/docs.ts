export type Category = 'Core' | 'Graphics' | 'Input' | 'Audio' | 'Physics' | 'Utils'
export const Categories: Category[] = ['Core', 'Graphics', 'Input', 'Audio', 'Physics', 'Utils']

export type Doc = {
    id: string
    name: string
    category: Category
    description: string
    params: string
    example: string
}
export const DOCS: Doc[] = [

]