// Preloader
window.addEventListener('load', function() {
    document.querySelector('.preloader').classList.add('opacity-0');
    setTimeout(function(){
        document.querySelector('.preloader').style.display = 'none';
    }, 1000);
    setTimeout(() => {
        document.querySelector('.style-switcher').classList.remove('open');
    }, 3000);
});

// iTyped 
window.ityped.init(document.querySelector('.iTyped'), {
    strings: ["I'm a Backend Developer", 'I worked with Golang', 'I worked with Node.js', 
    'I wrote robotics algorithms', 'I play the Piano'],
    loop: true
});

// Aside Navbar
const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', function(){
        // remove back section class
        removeBackSectionClass();

        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector('a').classList.contains('active')) {
                // add back section class
                addBackSectionClass(j);
            }
            navList[j].querySelector('a').classList.remove('active');
        }

        this.classList.add('active');

        showSection(this);

        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}

function addBackSectionClass(num) {
    allSection[num].classList.add('back-section');
}

function removeBackSectionClass() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('back-section');
    }
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1];
        if (target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
            navList[i].querySelector('a').classList.add('active');
        }
    }
}

document.querySelector('.logo-btn').addEventListener('click', function() {
    toClick = document.querySelector('div.aside-inner').
        querySelectorAll("a[href='#home']")
    toClick[0].click()
    asideSectionTogglerBtn();
});

document.querySelector('.find-out').addEventListener('click', function() {
    toClick = document.querySelector('div.aside-inner').
        querySelectorAll("a[href='#about']")
    toClick[0].click()
    asideSectionTogglerBtn();
});

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active');
    }

    const target = element.getAttribute('href').split('#')[1];

    document.querySelector('#'+target).classList.add('active');
}

const navTogglerBtn = document.querySelector('.nav-toggler'),
    aside = document.querySelector('.aside');

navTogglerBtn.addEventListener('click', asideSectionTogglerBtn);

function asideSectionTogglerBtn() {
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle('open');
    }
}