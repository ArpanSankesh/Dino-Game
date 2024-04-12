import { updateGround } from "./ground";

const WORLD_WIDTH = 100;
const WORLD_HIGHT = 20;

const WorldElem = document.querySelector("[data-world]");

setPixelToWorldScale();
window.addEventListener("resize", setPixelToWorldScale);

let lastTime;
function update(time){
    if (lastTime == null){
        lastTime = time
        window.requestAnimationFrame(update);
        return
    }
    const delta = time - lastTime
    // console.log(delta)

    updateGround(delta)

    lastTime= time
    window.requestAnimationFrame(update)
}
window.requestAnimationFrame(update)

function setPixelToWorldScale() {
  let worldToPixelScale;
  if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HIGHT) {
    worldToPixelScale = window.innerWidth / WORLD_WIDTH;
  } else {
    worldToPixelScale = window.innerHeight / WORLD_HIGHT;
  }
  WorldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`;
  WorldElem.style.height = `${WORLD_HIGHT * worldToPixelScale}px`;
}
