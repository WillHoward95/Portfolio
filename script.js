//phone screen nav menu
const toggleButton = document.getElementById('toggle-button')
const navBarLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
})

//back to top button
const backToTop = document.getElementById('back-to-top')

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 90) {
        if (!backToTop.classList.contains('btnEntrance')) {
            backToTop.classList.remove('btnExit')
            backToTop.classList.add('btnEntrance')
            backToTop.style.display = 'block'
        }
    } else {
        if (backToTop.classList.contains('btnEntrance')) {
            backToTop.classList.remove('btnEntrance')
            backToTop.classList.add('btnExit')
            
            setTimeout(function() {
                backToTop.style.display = 'none'
            }, 250)
        }

    }
}

backToTop.addEventListener('click', backToTopFunction)

function backToTopFunction() {
    window.scrollTo(0,0);
}