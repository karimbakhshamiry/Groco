// const searchBtn = document.getElementById('search-btn')
// const navItems = document.querySelectorAll('.nav-items')
const shoppingCart = document.querySelector('.shopping-cart')
const searchForm = document.querySelector('.search-form')
const loginForm = document.querySelector('.login-form')
const navBar = document.querySelector('.nav')

document.addEventListener('click', (e) => {
    const element = e.target

    if (element.id === 'search-btn') {
        shoppingCart.classList.remove('show')
        loginForm.classList.remove('show')
        navBar.classList.remove('show')

        searchForm.classList.toggle('show')

    } else if (element.id === 'shopping-cart-btn') {
        searchForm.classList.remove('show')
        loginForm.classList.remove('show')
        navBar.classList.remove('show')

        shoppingCart.classList.toggle('show')

    } else if (element.id === 'user-btn') {
        shoppingCart.classList.remove('show')
        searchForm.classList.remove('show')
        navBar.classList.remove('show')

        loginForm.classList.toggle('show')

    } else if (element.id === 'menu-btn') {
        shoppingCart.classList.remove('show')
        searchForm.classList.remove('show')
        loginForm.classList.remove('show')
        
        navBar.classList.toggle('show') 

        // change the icon of the menu btn
        toggleMenuIcon()

    } else if (element.classList.contains('nav-item')) {
        document.querySelector('.selected').classList.remove('selected')

        element.classList.add('selected')
        navBar.classList.remove('show')

        
        // change the icon of the menu btn
        toggleMenuIcon()
    }

})

window.addEventListener('scroll', () => {
    shoppingCart.classList.remove('show')
    searchForm.classList.remove('show')
    loginForm.classList.remove('show')
})



function toggleMenuIcon() {
    document.getElementById('menu-btn').classList.toggle('menu-btn-close')
    if (document.getElementById('menu-btn').classList.contains('fa-bars')) {

        document.getElementById('menu-btn').classList.remove('fa-bars')
        document.getElementById('menu-btn').classList.add('fa-times')

    } else {

        document.getElementById('menu-btn').classList.add('fa-bars')
        document.getElementById('menu-btn').classList.remove('fa-times')

    }
}
const productsSwiper = new Swiper(".product-slider", {
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        900: {
            slidesPerView: 3
        },
        1000: {
            slidesPerView: 4
        },
        
    },
    keyboard: {
        enabled: true
    },
    // mousewheel: true,
});

const reviewSwiper = new Swiper(".review-slider", {
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        900: {
            slidesPerView: 3
        },
        1000: {
            slidesPerView: 4
        },
        
    },
    keyboard: {
        enabled: true
    },
    // mousewheel: true,
});