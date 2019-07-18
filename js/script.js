'use strict';

// Loading images emulation
const imageStorage = [
    {
        type: "graphic-design",
        path: "img/work/graphic-design1.jpg"
    },
    {
        type: "web-design",
        path: "img/work/graphic-design2.jpg"
    },
    {
        type: "landing-pages",
        path: "img/work/graphic-design3.jpg"
    },
    {
        type: "wordpress",
        path: "img/work/graphic-design4.jpg"
    },
    {
        type: "graphic-design",
        path: "img/work/graphic-design5.jpg"
    },
    {
        type: "web-design",
        path: "img/work/graphic-design6.jpg"
    },
    {
        type: "landing-pages",
        path: "img/work/graphic-design7.jpg"
    },
    {
        type: "wordpress",
        path: "img/work/graphic-design8.jpg"
    },
    {
        type: "graphic-design",
        path: "img/work/graphic-design9.jpg"
    },
    {
        type: "web-design",
        path: "img/work/graphic-design10.jpg"
    },
    {
        type: "landing-pages",
        path: "img/work/graphic-design11.jpg"
    },
    {
        type: "wordpress",
        path: "img/work/graphic-design12.jpg"
    },
    {
        type: "graphic-design",
        path: "img/work/graphic-design13.jpg"
    },
    {
        type: "web-design",
        path: "img/work/graphic-design14.jpg"
    },
    {
        type: "landing-pages",
        path: "img/work/graphic-design15.jpg"
    },
    {
        type: "wordpress",
        path: "img/work/graphic-design16.jpg"
    },
    {
        type: "graphic-design",
        path: "img/work/graphic-design17.jpg"
    },
    {
        type: "web-design",
        path: "img/work/graphic-design18.jpg"
    },
    {
        type: "landing-pages",
        path: "img/work/graphic-design19.jpg"
    },
    {
        type: "wordpress",
        path: "img/work/graphic-design20.jpg"
    },
    {
        type: "graphic-design",
        path: "img/work/graphic-design21.jpg"
    },
    {
        type: "web-design",
        path: "img/work/graphic-design22.jpg"
    },
    {
        type: "landing-pages",
        path: "img/work/graphic-design23.jpg"
    },
    {
        type: "wordpress",
        path: "img/work/graphic-design24.jpg"
    },
    {
        type: "graphic-design",
        path: "img/work/graphic-design25.jpg"
    },
    {
        type: "web-design",
        path: "img/work/graphic-design26.jpg"
    },
    {
        type: "landing-pages",
        path: "img/work/graphic-design27.jpg"
    },
    {
        type: "wordpress",
        path: "img/work/graphic-design28.jpg"
    },
    {
        type: "graphic-design",
        path: "img/work/graphic-design29.jpg"
    },
    {
        type: "web-design",
        path: "img/work/graphic-design30.jpg"
    },
    {
        type: "landing-pages",
        path: "img/work/graphic-design31.jpg"
    },
    {
        type: "wordpress",
        path: "img/work/graphic-design32.jpg"
    },
    {
        type: "graphic-design",
        path: "img/work/graphic-design33.jpg"
    },
    {
        type: "web-design",
        path: "img/work/graphic-design34.jpg"
    },
    {
        type: "landing-pages",
        path: "img/work/graphic-design35.jpg"
    },
    {
        type: "wordpress",
        path: "img/work/graphic-design36.jpg"
    }
];

// Preloader
window.onload = function() {
    const preloader = document.getElementById('preloader')
    preloader.setAttribute('hidden', '');
    preloader.style.backgroundColor = 'rgba(0,0,0,0.5)';
};

// Loading emulation
function loading(templateHtml, cardList, portion, that, cb) {
    document.getElementById('preloader').removeAttribute('hidden');
    setTimeout(function () {
        document.getElementById('preloader').setAttribute('hidden', '');
        cb(templateHtml, cardList,portion, that);
    }, 3000);
}

// Menu and button onTop
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let scrollHeight = 800;
    const menuStyle = document.querySelector("#menu").style;
    if (document.body.scrollTop > scrollHeight || document.documentElement.scrollTop > scrollHeight) {
        menuStyle.height = "80px";
        menuStyle.backgroundColor = "rgba(0,0,0,1)";
        document.getElementById("backToTop").style.display = "block";
    } else {
        menuStyle.height = "120px";
        menuStyle.backgroundColor = "rgba(0,0,0,0.5)";
        document.getElementById("backToTop").style.display = "none";
    }
}

document.querySelector('#backToTop').addEventListener('click', function () {
    document.documentElement.scroll(
        {
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
});

function scrollToSection(element) {
    // Menu height correction in px
    const menuHeight = 80;
    window.scroll(
        {
            top: element.offsetTop - menuHeight,
            left: 0,
            behavior: 'smooth'
        })
}

// Listener on menu item
document.querySelector('.menu').addEventListener('click',  function (e) {
        e.preventDefault();
        if (e.target.closest('A')) {
            scrollToSection(document.getElementById(e.target.hash.slice(1)));
        }
});

// Listener on search-input
document.querySelector('.form-search__input').addEventListener('click', (e) => {
    e.target.parentNode.classList.add('form-search--searching');
});

// Listener on search-button
document.querySelector('.form-search__btn').addEventListener('click', (e) => {
    e.preventDefault();
    //code to send submit data
    e.currentTarget.parentNode.classList.remove('form-search--searching');
});


// Tabs
document.querySelectorAll('.tabs').forEach(function (item) {
    const tabList = item.querySelector('.tabs .tabs-caption').children;
    const contentList = item.querySelectorAll('.tabs .tabs-content');
    for (const tab of tabList) {
        tab.addEventListener('click', function (e) {
            for (const tab of tabList) {
                tab.classList.remove('active');
            }
            for (const content of contentList) {
                content.classList.remove('active');
            }
            e.target.classList.add('active');
            document.querySelector(`#${e.target.dataset.tabs}`).classList.add('active');
        })
    }
});

// Our Amazing Work
// Emulation of getting images from server
function getImagesFromServer(templateHtml, number = 12, that) {

    if( typeof getImagesFromServer.index == 'undefined' ) {
        getImagesFromServer.index = 0;
    }
    getImagesFromServer.imageStorageLength = imageStorage.length;
    if (getImagesFromServer.index === getImagesFromServer.imageStorageLength) {
        return null;
    } else {
        const documentFragment = document.createDocumentFragment();
        let stopIndex = getImagesFromServer.index + number;

        if (stopIndex > getImagesFromServer.imageStorageLength) {
            stopIndex = getImagesFromServer.imageStorageLength;
        }

        for (let i = getImagesFromServer.index; i < stopIndex; i++) {
            const card = document.importNode(templateHtml, true);
            card.dataset.type = imageStorage[i].type;
            card.querySelector('img').setAttribute('src', imageStorage[i].path);
            documentFragment.appendChild(card);
        }
        getImagesFromServer.index = stopIndex;
        if (getImagesFromServer.index === getImagesFromServer.imageStorageLength) {
            that.style.display = 'none';
        }
        return documentFragment;
    }
}

// CallBack function to get cards
function addCards(templateHtml, cardList, portion, that) {
    const cards = getImagesFromServer(templateHtml, portion, that);
    if (cards !== null) {
        cardList.appendChild(cards);
    }
}

// Filtering cards
function filterCards(item, cardList, event) {
    for (let i = 0, length = event.currentTarget.children.length; i < length; i++) {
        event.currentTarget.children[i].classList.remove('active');
    }
    event.target.classList.add('active');

    if (event.target.dataset.tabs === 'all') {
        for (let i = 0, length = cardList.children.length; i < length; i++) {
            cardList.children[i].hidden = false;
        }
        item.querySelector('.filter-tabs .btn').disabled = false;
    } else {
        for (let i = 0, length = cardList.children.length; i < length; i++) {
            cardList.children[i].hidden = event.target.dataset.tabs !== cardList.children[i].dataset.type;
        }
        item.querySelector('.filter-tabs .btn').disabled = true;
    }
}


// Adding listeners to section id="work"
document.querySelectorAll('.filter-tabs').forEach(function (item) {
    const portion = 12;
    const cardList = item.querySelector('.filter-tabs-card-wrapper');
    const templateHtml = item.querySelector(`#${cardList.dataset.template}`)
                             .content.querySelector('.flip-card');

    // Loading images on LoadPage
    addCards(templateHtml, cardList, portion);

    // Handling click on "LoadMore" images
    item.querySelector('.filter-tabs .btn').addEventListener('click', function (event) {
        loading(templateHtml, cardList, portion, this, addCards);
    });

    // Handling TabsFilter
    item.querySelector('.filter-tabs-caption').addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            filterCards(item, cardList, event);
        }
    });
});

// Testimonials

const moveToSlide = (track, activeSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    activeSlide.classList.remove('active');
    targetSlide.classList.add('active');
};

const updateIcons = (activeIcon, targetIcon) =>  {
    activeIcon.classList.remove('active');
    targetIcon.classList.add('active');
};

const disableArrow = (prevButton, nextButton, slideList, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.disabled = true;
        nextButton.disabled = false;
    } else if (targetIndex === slideList.length - 1) {
        prevButton.disabled = false;
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
};

document.querySelectorAll('.carousel').forEach(function (item) {
    const track = item.querySelector('.carousel__track');
    const slideList = Array.from(item.querySelector('.carousel__track').children);
    const nextButton = item.querySelector('.carousel__btn--right');
    const prevButton = item.querySelector('.carousel__btn--left');
    const iconsNav = item.querySelector('.carousel__icons-nav');
    const iconsList = Array.from(iconsNav.children);

    // arrange the slides next to one another
    for (let i = 0, length = slideList.length; i < length; i++) {
        slideList[i].style.left = slideList[i].getBoundingClientRect().width * i + 'px';
    }

    nextButton.addEventListener('click', e => {
        const activeSlide = track.querySelector('.carousel__slide.active');
        const nextSlide = activeSlide.nextElementSibling;
        const activeIcon = iconsNav.querySelector('.carousel__icon.active');
        const nextIcon = activeIcon.nextElementSibling;
        const nextIndex = slideList.findIndex(slide => slide === nextSlide);

        moveToSlide(track, activeSlide, nextSlide);
        updateIcons(activeIcon, nextIcon);
        disableArrow(prevButton, nextButton, slideList, nextIndex);
    });

    prevButton.addEventListener('click', e => {
        const activeSlide = track.querySelector('.carousel__slide.active');
        const prevSlide = activeSlide.previousElementSibling;
        const activeIcon = iconsNav.querySelector('.carousel__icon.active');
        const prevIcon = activeIcon.previousElementSibling;
        const prevIndex = slideList.findIndex(slide => slide === prevSlide);

        moveToSlide(track, activeSlide, prevSlide);
        updateIcons(activeIcon, prevIcon);
        disableArrow(prevButton, nextButton, slideList, prevIndex);
    });

    iconsNav.addEventListener('click', e => {
        const targetIcon = e.target.closest('LI');
        if (!targetIcon) return;

        const activeSlide = track.querySelector('.carousel__slide.active');
        const activeIcon = iconsNav.querySelector('.carousel__icon.active');
        const targetIndex = iconsList.findIndex(icon => icon === targetIcon);
        const targetSlide = slideList[targetIndex];

        moveToSlide(track, activeSlide, targetSlide);
        updateIcons(activeIcon, targetIcon);
        disableArrow(prevButton, nextButton, slideList, targetIndex);
    });
});

// Section Gallery
// Generation images from server
const gridItems = [];
const grid = document.querySelector(".grid");
const generateImages = (el, count = 16) => {
    if( typeof generateImages.id == 'undefined' ) {
        generateImages.id = 0;
    }
    const getRandomSize = (min, max) =>
        Math.round(Math.random() * (max - min) + min);

    const newImage = () => {
        const item = document.createElement("div");
        item.className = "grid-item";

        const content = document.createElement("img");
        const width = getRandomSize(100, 600);
        const height = getRandomSize(100, 400);
        content.src = `https://picsum.photos/${width}/${height}`;
        content.setAttribute('data-id', generateImages.id);
        generateImages.id++;

        item.appendChild(content);
        gridItems.push({ item, content });

        return item;
    };

    const images = document.createDocumentFragment();
    for (let i = 0; i < count; i++) images.appendChild(newImage());
    el.appendChild(images);
};

// Masonry Plugin usage
function arrangeImages() {
    imagesLoaded(document.querySelector('.grid'), function() {
        const msnry = new Masonry( grid, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-item',
            percentPosition: true,
            gutter: 8,
        });
    });
}

generateImages(grid, 6);
arrangeImages();

// Loadmore function
function loadMore() {
    document.getElementById('preloader').removeAttribute('hidden');
    setTimeout(function () {
        document.getElementById('preloader').setAttribute('hidden', '');
    }, 3000)
    generateImages(grid, 6);
    arrangeImages();
}

// Load More button
document.querySelector('#gallery .btn').addEventListener('click', function () {
    loadMore();
});

// Click on image to open modal window
document.querySelector('.grid').addEventListener('click', function (e) {
    if (e.target.closest('IMG')) {
        const modal = document.getElementById('modal__show-image');
        const img = modal.querySelector('.modal__window img');
        const itemId = e.target.dataset.id;
        img.src = gridItems[itemId].content.src;
        img.setAttribute('data-id', itemId);
        modal.style.display = 'flex';
    }
});

// Change image in modal window
function changeImage(that) {
    const imgId = parseInt(document.querySelector('#modal__show-image .modal__window img').dataset.id);
    let targetImgId;
    if (that.dataset.target === 'prev') {
        if (imgId === 0) {
            targetImgId = gridItems.length - 1;
        } else {
            targetImgId = imgId - 1;
        }
    }

    if (that.dataset.target === 'next') {
        if (imgId === gridItems.length - 1) {
            targetImgId = 0;
        } else {
            targetImgId = imgId + 1;
        }
    }
    that.parentNode.children[1].firstElementChild.src = gridItems[targetImgId].content.src;
    that.parentNode.children[1].firstElementChild.dataset.id = targetImgId;
}

// Button Prev listener
document.querySelector('.modal__wrapper .modal__btn--prev').addEventListener('click',  function () {
    changeImage(this);
});

// Button Next listener
document.querySelector('.modal__wrapper .modal__btn--next').addEventListener('click',  function () {
    changeImage(this);
});

// Button Close listener
document.querySelector('.modal__wrapper .modal__btn-close').addEventListener('click', () => {
    document.getElementById('modal__show-image').style.display = 'none';
});
