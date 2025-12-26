import { BatchRenderer, colors, Delay, Init_canvas, Loop, } from "twisterjs"

import { AnimChannel, vec2, vibrant } from 'twisterjs'
import { type Agent, agent, update_agent, type SteeringBehavior,  Seek, WanderJitter, } from 'twisterjs'

let agent1: Agent

let behaviors: SteeringBehavior[]

let theta: AnimChannel

let seek_x: AnimChannel

let delay: Delay

const _init = () => {

    seek_x = new AnimChannel()

    theta = new AnimChannel()

    agent1 = agent(vec2(512, 512), {
        radius: 1,
        mass: 1,
        maxSpeed: 1000,
        maxForce: 2500,
        turnRate: Math.PI * 2
    })

    const seek_target = () => {
        return vec2(seek_x.value, 500)
    }

    behaviors = [
        new Seek(3, 1, seek_target),
        new WanderJitter(1, .25)
    ]

    delay = new Delay().set_line('3000 right')
}

const _update = (delta: number) => {
    update_agent(agent1, behaviors, [], delta / 1000)

    theta.springTo(agent1.rotation + Math.PI * 0.5, {
        stiffness: 1000,
        damping: 10
    })

    theta.update(delta / 1000)

    seek_x.update(delta / 1000)

    delay.update(delta)

    if (delay.action === 'left') {
        seek_x.springTo(0)
        delay.set_line('3000 right')
    } else if (delay.action === 'right') {
        seek_x.springTo(1024)
        delay.set_line('3000 left')
    }
}

const _render = () => {

    batch.beginFrame()

    batch.fillRect(512, 512, 1024, 1024, vibrant.darkblue)
    batch.strokeRect(512, 512, 1020, 1020, 4, colors.darkblue)

    batch.fillRoundRect(agent1.position.x, agent1.position.y, 80, 140, 16, vibrant.yellow, theta.value)

    batch.fillRect(seek_x.value, 500, 30, 30, colors.black)

    batch.endFrame()
}

let batch: BatchRenderer
const _set_ctx = (b: BatchRenderer) => {
    batch = b
}

async function demo(el: HTMLElement) {

    let res = Init_canvas(1024, 1024, el, _render)

    _set_ctx(res.batch)

    _init()
    
    let loop_cleanup = Loop(_update, _render)

    return {
        canvas: res.canvas,
        cleanup: () => {
            res.cleanup()
            loop_cleanup()
        }
    }
}


export const Steering = {
    id: 'Steering',
    title: 'Steering Behaviors',
    description: 'Control a moving agent steer according to some Steering Behaviors',
    code: `
import { AnimChannel, vec2, vibrant } from 'twisterjs'
import { type Agent, agent, update_agent, type SteeringBehavior,  Seek, WanderJitter, } from 'twisterjs'

let agent1: Agent

let behaviors: SteeringBehavior[]

let theta: AnimChannel

let seek_x: AnimChannel

let delay: Delay

const _init = () => {

    seek_x = new AnimChannel()

    theta = new AnimChannel()

    agent1 = agent(vec2(512, 512), {
        radius: 1,
        mass: 1,
        maxSpeed: 1000,
        maxForce: 2500,
        turnRate: Math.PI * 2
    })

    const seek_target = () => {
        return vec2(seek_x.value, 500)
    }

    behaviors = [
        new Seek(3, 1, seek_target),
        new WanderJitter(1, .25)
    ]

    delay = new Delay().set_line('3000 right')
}

const _update = (delta: number) => {
    update_agent(agent1, behaviors, [], delta / 1000)

    theta.springTo(agent1.rotation + Math.PI * 0.5, {
        stiffness: 1000,
        damping: 10
    })

    theta.update(delta / 1000)

    seek_x.update(delta / 1000)

    delay.update(delta)

    if (delay.action === 'left') {
        seek_x.springTo(0)
        delay.set_line('3000 right')
    } else if (delay.action === 'right') {
        seek_x.springTo(1024)
        delay.set_line('3000 left')
    }
}

const _render = () => {

    batch.beginFrame()

    batch.fillRect(512, 512, 1024, 1024, vibrant.darkblue)
    batch.strokeRect(512, 512, 1020, 1020, 4, colors.darkblue)

    batch.fillRoundRect(agent1.position.x, agent1.position.y, 80, 140, 16, vibrant.yellow, theta.value)

    batch.fillRect(seek_x.value, 500, 30, 30, colors.black)

    batch.endFrame()
}


`,
    demo
}
