const animatedTags = document.querySelectorAll("div.left img, div.right img")

animatedTags.forEach(tag => {
  tag.style.opacity = 0
})

const fadeIn = function () {
  
	animatedTags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom

    if (tagTop < window.innerHeight) {
      tag.style.animation = `fadeIn 1s both`
      
    }
  })
}

fadeIn()

document.addEventListener("scroll", function () {
  fadeIn()         
}) 
                          
window.addEventListener("resize", function () {
  fadeIn()
})