

const ClickMe = document.querySelector('#click-me')
const closeBtn = document.querySelector('#close-btn')

const tl = gsap.timeline()

ClickMe.addEventListener('click', ()=>{
    gsap.to('.img',{
        scale:1.1,
    })
    tl.to(".wrapped", {
       opacity:1
    }).to("#click-me", {
       y:-80,
       ease: "elastic",
       duration:1
    }).to('#click-me',{
        y:30,
        opacity:0,
        duration:0.5
    }).to('.newsletter-box',{
        opacity:1,
        y:-30,
        ease:"elastic",
        duration:1
    }).to('.newsletter-box',{
        width:"32vw",
        ease:"elastic",
        duration:1
    }).to('#close-btn',{
        opacity:1
    }).to('.inp',{
        opacity:1,
        position:"relative"
    })

})
closeBtn.addEventListener('click', ()=>{
    gsap.to('.img',{
        scale:1
    })
    tl.to(".newsletter-box", {
       scale:1.1,
       duration:0.3
    }).to('#close-btn',{
        opacity:0
    }).to('.inp',{
        opacity:0,
        position:"relative"
    }).to('.newsletter-box',{
        scale:1,
        width:'8vw'
    }).to('.newsletter-box',{
        y:60,
        opacity:0,  
    }).to(".wrapped", {
        opacity:0
     }).to('#click-me',{
        y:-30,
        opacity:1,
        duration:0.5
    })
})