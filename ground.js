import { incrementCustomProperty } from "./updateCustomProperty.js"

const groundElem = document.querySelectorAll('[data-ground]')

SPEED  = 0.05
export function updateGround(delta){
    groundElem.forEach(ground => {
        incrementCustomProperty(ground, "--left", delta * SPEED * -1)
    })
}