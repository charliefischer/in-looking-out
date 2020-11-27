const irisLeft = document.querySelector("div.iris-left")
const irisRight = document.querySelector("div.iris-right")

const mq = window.matchMedia("(max-width:400px)")

const mqOne = window.matchMedia("(max-width:1300px)")

  const moveEye = function (tag, mouseX, mouseY) {
//   tag.style.left = mouseX + "px"
//   tag.style.top = mouseY + "px"
  const eyeMidX = tag.getBoundingClientRect().left
  const eyeMidY = tag.getBoundingClientRect().top
  
  const diffX = mouseX - eyeMidX
  const diffY = mouseY - eyeMidY
  
  
  const diff = Math.sqrt(diffX * diffX * diffY * diffY)
  if (mq.matches) {
    var radius = Math.min(5, diff)
    }
    else if (mqOne.matches) {
  var radius = Math.min(18, diff)
  } else {
	var radius = Math.min(24, diff)    
  }
    
  const angle = Math.atan2(diffY, diffX)
  const cappedX = radius * Math.cos(angle)
  const cappedY = radius * Math.sin(angle)
  
  const eyeTag = tag.querySelector("div")
  
  eyeTag.style.left = cappedX + "px"
  eyeTag.style.top = cappedY + "px"
  
} 
// else {}
// }



document.addEventListener("mousemove", function (event) { 
	moveEye(irisLeft, event.pageX, event.pageY)
  moveEye(irisRight, event.pageX, event.pageY)
})

