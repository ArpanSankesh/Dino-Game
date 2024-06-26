import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js"

const SPEED  = .2
const groundElem = document.querySelectorAll('[data-ground]')

export function setupGround(){
    setCustomProperty(groundElem[0], "--left", 0)
    setCustomProperty(groundElem[1], "--left", 200)
}

export function updateGround(delta){
    groundElem.forEach(ground => {
        incrementCustomProperty(ground, "--left", delta * SPEED * -1)

        if(getCustomProperty(ground , "--left") <= -200)
        incrementCustomProperty(ground, "--left", 400)
    })
}