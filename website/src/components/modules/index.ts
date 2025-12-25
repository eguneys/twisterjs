import type { DemoReturn } from "twisterjs"
import { Springs } from "./Springs"
import { Welcome } from "./Welcome"

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
