import { Springs } from "./Springs"
import { Welcome } from "./Welcome"

export type DemoReturn = {
    canvas: HTMLCanvasElement
    cleanup: () => void
}

export type ModuleSnippet = {
    id: string
    title: string
    description: string
    code: string
    demo: (el: HTMLElement) => Promise<DemoReturn>
}

export const Module_Snippets: ModuleSnippet[] = [
    Welcome,
    Springs
]
