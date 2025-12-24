import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
//import 'highlight.js/styles/base16/material.css'
import 'highlight.js/styles/base16/pico.css'

hljs.registerLanguage('typescript', typescript)

export const CodeHighlight = (props: { code: string, class?: string }) => {

    return (<>
    <code class={props.class} innerHTML={hljs.highlight(props.code, { language: 'ts' }).value}/>

    </>)
}