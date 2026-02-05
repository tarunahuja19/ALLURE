import gsap from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js";
import ScrollTrigger from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);
const review=gsap.utils.toArray('.review')
const reviewTl=gsap.timeline(
    {
        scrollTrigger:{
            trigger:'.section4',
            start:'top top',
            end: "+=" + review.length * 500,
            scrub:true,
            pin:true
        }
    }
)
gsap.set(review,{
    x:()=>window.innerWidth
})
if (window.innerWidth>430) {
    review.forEach((review,i)=>{
        gsap.set(review, { zIndex: i + 1 });
    reviewTl.to(review,{
        x:()=>i*20,
    },i*0.5)
})
}
else{
    review.forEach((review,i)=>{
        gsap.set(review, { zIndex: i + 1 });
    reviewTl.to(review,{
        
        x:0,
        
    },i*0.5)
})
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("section2Observe");
            entry.target.classList.add("sect3HeadingObserve");
            if (entry.target.classList.contains('section3-1-1Content')) {
                const section3_1 = entry.target.closest('.section3-1');
                const section3Image1 = section3_1.querySelector('.section3-1-1Img');
                section3Image1.classList.add("section3Image1Observe");
                const section3Image2 = section3_1.querySelector('.section3-1-3Img');
                const section3Content2 = section3_1.querySelector('.section3-1-3Content');
                entry.target.classList.add("section3Content1Observe");
                section3Content2.classList.add("section3Content2Observe");
                section3Image2.classList.add("section3Image2Observe");
            }
            entry.target.classList.add("sect4HeadingObserve");

        }
    })
}, {})
const carousel = document.querySelectorAll('.section2');
const sect3Heading = document.querySelectorAll('.sect3Heading');
const section3Content1 = document.querySelectorAll('.section3-1-1Content');
const sect4Heading=document.querySelectorAll('.sect4Heading');
carousel.forEach((e) => { observer.observe(e) });
sect3Heading.forEach((e) => { observer.observe(e) });
section3Content1.forEach((e) => { observer.observe(e) });
sect4Heading.forEach((e)=>{observer.observe(e)});