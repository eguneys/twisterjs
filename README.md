![TwisterJS Banner](design/banner.png)

![NPM Version](https://img.shields.io/npm/v/twisterjs)

[Website](https://twisterjs.com/) 

Tiny Modules for Indie Game Development in Typescript.

## API is
- Tree-Shakeable Highly Modular Slim
- Tailored for Indie-Game-Developer Experience
- Designed with the effort of "Vibe Coding Principles", cross checked with ChatGPT, Gemini, and DeepSeek, and other AI tools.

## A Quick Look


```ts
import { TwisterJS, Loop } from 'twisterjs'

function _update(delta: number) {
   console.log(TwisterJS, delta) // logs TwisterJS
}

function _render() {
}

// starts a game loop using requestAnimationFrame
let loop_cleanup = Loop(_update, _render)
```

## Features

- Springs
- Delaying Actions
- Steering Behaviors
- Vector Math
- Rectangle and Line Math
- Polygon Math
- Drawing Shapes with efficient - WebGL Batched Rendering
- Game Loop
- Mouse Input
- Webpage Integration Manager


## Please Buy me a Coffee

[Buy Me a Coffee](https://buymeacoffee.com/eguneys)