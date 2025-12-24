import type { Doc } from "../components/docs";

export const Steer_Docs: Doc[] = [
    {
        id: 'Agent',
        name: 'agent(position: Vec2, params: AgentParams): Agent',
        category: 'AI',
        group: 'Steering Behaviors',
        description: 'Creates a moving Agent to apply Steering Behaviors on',
        example: `
let a = agent(vec2(0, 0), {
  radius: 8, // may be used in some behaviors
  mass: 1, // influences the amount of force applied
  maxSpeed: 100, // controls the maximum speed Agent can reach
  maxForce: 100, // controls the maximum amount of force Agent can be applied
  turnRate: Math.PI * 8 // controls the maximum rate of turn per second that can be applied
})

  // list of behaviors that affects the movement, can be dynamic
  // each behavior in the list contributes to the forces scaled by their weights
  let behaviors = [
     new Seek(1, /* ... */), // seek behavior with a weight of 1
     new FlightAvoidance(3, /* ... */), // flight behavior with a weight of 3
     new WanderJitter(2, /* ... */) // add some jitter with a weight of 2
  ]

  // list of bounds that applies collision detection
  // can be left empty for now
  let bounds = []

  /* within update loop call each frame with time delta in seconds */
  update_agent(a, behaviors, bounds, delta)

  /* use the moving agent's position and velocity */
  console.log(a.position, a.velocity)
`
    },
    {
        id: 'Seek',
        name: 'new Seek(weight: number, speedFactor: number, target: TargetProvider)',
        category: 'AI',
        group: 'Steering Behaviors',
        description: 'Creates a new Seek Steering Behavior',
        example: `

/* target provider is a function that returns the position of the target
const target: () => {
  /* can dynamically control the target position */

  /* follow the cursor */
  /* return cursor.xy */

  /* or disable the behavior temporarily */
  return undefined
}

/* pass to update_agent behaviors */
let seek = new Seek(1, 2, target)

`
    },
    {
        id: 'Arrive',
        name: 'new Arrive(weight: number, speedFactor: number, slowRadius: number, target: TargetProvider)',
        category: 'AI',
        group: 'Steering Behaviors',
        description: 'Creates a new Arrive Steering Behavior',
        example: `
/* pass to update_agent behaviors */
let arrive = new Arrive(1, 1, 100, () => cursor.xy)
`
    },
    {
        id: 'WanderJitter',
        name: 'new WanderJitter(weight: number, interval = 0.25)',
        category: 'AI',
        group: 'Steering Behaviors',
        description: 'Creates a new Wandering with Jitter Steering Behavior',
        example: `
let interval = 0.25 // interval of time in seconds to apply the jitter at (periodic)
new WanderJitter(1, interval)
`
    },
    {
        id: 'Wander',
        name: 'new Wander(weight: number, circleDistance: number, circleRadius: number, jitter: number)',
        category: 'AI',
        group: 'Steering Behaviors',
        description: 'Creates a new Wander Steering Behavior',
        example: `
let circleDistance = 100 // distance ahead of agent
let circleRadius = 100 // radius of the wander circle
let jitter = Math.PI // angular change per second (radians)
new Wander(1, circleDistance, circleRadius, jitter)
`
    },
    {
        id: 'FlightAvoidance',
        name: 'new FlightAvoidance(weight: number, obstacles: () => Obstacle[], radius: number, falloff: number, forwardBias: number)',
        category: 'AI',
        group: 'Steering Behaviors',
        description: 'Creates a new Flight Avoidance Steering Behavior',
        example: `
/* An obstacle is an object with a position and a radius */
let obstacle_a = {
  position: vec2(10, 10),
  radius: 10
}

let obstacles = () => [obstacle_a] // list of obstacles to flight away from
let radius = 100 // the distance of radius to keep away
let falloff = 10 // smoothing factor (best to keep close to [1-2])
let forwardBias = 0.8 // smoothing factor (best to keep between [0, 1])
new FlightAvoidance(1, obstacles, radius, fallof, forwardBias)
`
    },
]
