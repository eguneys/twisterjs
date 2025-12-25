import type { DemoReturn } from "twisterjs"
import { Springs } from "./Springs"
import { Welcome } from "./Welcome"
import { Delay } from "./Delay"
import { Steering } from "./Steer"
import { Shapes } from "./Shapes"
import { WebpageIntegration } from "./WebpageIntegration"

export type ModuleSnippet = {
    id: string
    title: string
    description: string
    code: string
    demo: (el: HTMLElement) => Promise<DemoReturn>
}

export const Module_Snippets: ModuleSnippet[] = [
    Welcome,
    Springs,
    Delay,
    Steering,
    Shapes,
    WebpageIntegration

]