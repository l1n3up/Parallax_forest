window.addEventListener('scroll', e => {
    document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})

document.addEventListener('DOMContentLoaded', function () {
   gsap.registerPlugin(ScrollSmoother,ScrollTrigger )
    ScrollSmoother.create({
        wrapper: '.wrapper', 
        content: '.content'
    })
  });

