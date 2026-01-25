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
                section3Image2.classList.add("section3Image2Observe")
            }


        }
    })
}, {})
const carousel = document.querySelectorAll('.section2');
const sect3Heading = document.querySelectorAll('.sect3Heading');
const section3Content1 = document.querySelectorAll('.section3-1-1Content');
carousel.forEach((e) => { observer.observe(e) });
sect3Heading.forEach((e) => { observer.observe(e) });
section3Content1.forEach((e) => { observer.observe(e) });