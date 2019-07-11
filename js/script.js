'use strict';

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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // let windowHeight = window.innerHeight;
    const menuStyle = document.querySelector("#menu").style;
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        menuStyle.height = "80px";
        menuStyle.backgroundColor = "rgba(0,0,0,1)";
        // document.getElementById("backToTop").style.display = "block";
    } else {
        menuStyle.height = "120px";
        menuStyle.backgroundColor = "rgba(0,0,0,0.5)";
        // document.getElementById("backToTop").style.display = "none";
    }
}

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

// Listener on each menu item
document.querySelectorAll('.menu a').forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target.closest('A') ) {
            scrollToSection(document.getElementById(e.target.hash.slice(1)));
        }
    })
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
document.querySelectorAll('.filter-tabs').forEach(function (item) {
    const portion = 12;
    const cardList = item.querySelector('.filter-tabs-card-wrapper');
    const templateHtml = item.querySelector(`#${cardList.dataset.template}`).content.querySelector('.flip-card');

    function getImagesFromServer(number = 12, eventTarget = null) {
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
                eventTarget.hidden = true;
            }
            return documentFragment;
        }
    }
    // Loading images on LoadPage
    (function () {
        const cards = getImagesFromServer(portion);
        if (cards !== null) {
            cardList.appendChild(cards);
        }
    })();

    // Handling click on "LoadMore" images
    item.querySelector('.filter-tabs .btn').addEventListener('click', function (event) {
        const cards = getImagesFromServer(portion, event.target);
        if (cards !== null) {
            cardList.appendChild(cards);
        }
    });

    // Handling TabsFilter
    item.querySelector('.filter-tabs-caption').addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
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
    });
});

// Testimonials
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

    const moveToSlide = (track, activeSlide, targetSlide) => {
        track.style.transform = `translateX(-${targetSlide.style.left})`;
        activeSlide.classList.remove('active');
        targetSlide.classList.add('active');
    };

    const updateIcons = (activeIcon, targetIcon) =>  {
        activeIcon.classList.remove('active');
        targetIcon.classList.add('active');
    };

    const disableArrow = (targetIndex) => {
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

    nextButton.addEventListener('click', e => {
        const activeSlide = track.querySelector('.carousel__slide.active');
        const nextSlide = activeSlide.nextElementSibling;
        const activeIcon = iconsNav.querySelector('.carousel__icon.active');
        const nextIcon = activeIcon.nextElementSibling;
        const nextIndex = slideList.findIndex(slide => slide === nextSlide);

        moveToSlide(track, activeSlide, nextSlide);
        updateIcons(activeIcon, nextIcon);
        disableArrow(nextIndex);
    });

    prevButton.addEventListener('click', e => {
        const activeSlide = track.querySelector('.carousel__slide.active');
        const prevSlide = activeSlide.previousElementSibling;
        const activeIcon = iconsNav.querySelector('.carousel__icon.active');
        const prevIcon = activeIcon.previousElementSibling;
        const prevIndex = slideList.findIndex(slide => slide === prevSlide);

        moveToSlide(track, activeSlide, prevSlide);
        updateIcons(activeIcon, prevIcon);
        disableArrow(prevIndex);
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
        disableArrow(targetIndex);
    });
});

// Section Gallery
//Masonry
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
        item.setAttribute('data-id', generateImages.id);
        generateImages.id++;


        const content = document.createElement("img");
        const width = getRandomSize(100, 600);
        const height = getRandomSize(100, 400);
        content.src = `https://picsum.photos/${width}/${height}`;

        item.appendChild(content);
        gridItems.push({ item, content });

        return item;
    };

    const images = document.createDocumentFragment();
    for (let i = 0; i < count; i++) images.appendChild(newImage());
    el.appendChild(images);
};

function orderImages() {
    imagesLoaded(document.querySelector('.grid'), function() {
        const msnry = new Masonry( grid, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-item',
            percentPosition: true,
            gutter: 8,
        });
    });
}

generateImages(grid, 3);
orderImages();

document.querySelector('#gallery .btn').addEventListener('click', function () {
    generateImages(grid, 16);
    orderImages();
});


document.querySelector('.grid').addEventListener('click', function (e) {
    if (e.target.closest('IMG')) {
        const modal = document.getElementById('modal__show-image');
        const img = modal.querySelector('.modal__window img');
        const itemId = e.target.parentNode.dataset.id;
        img.src = gridItems[itemId].content.src;
        img.setAttribute('data-id', itemId);
        modal.style.display = 'flex';
    }
});

document.querySelector('.modal__window .modal__btn--prev').addEventListener('click',  (e) => {
    const itemId = parseInt(document.querySelector('#modal__show-image .modal__window img').dataset.id);
    if (itemId === 0) {
        e.currentTarget.disabled = true;
        e.currentTarget.nextElementSibling.disabled = false;
    } else {
        const prevItemId = parseInt(itemId) - 1;
        e.currentTarget.parentNode.firstElementChild.src = document.querySelector('.grid').children[prevItemId].firstElementChild.src;
        e.currentTarget.parentNode.firstElementChild.dataset.id = prevItemId;
    }
});

document.querySelector('.modal__window .modal__btn--next').addEventListener('click',  (e) => {
    const itemId = parseInt(document.querySelector('#modal__show-image .modal__window img').dataset.id);
    // debugger
    if (itemId === document.querySelector('.grid').children.length - 1) {
        e.currentTarget.disabled = true;
        e.currentTarget.previousElementSibling.disabled = false;
    } else {
        const nextItemId = parseInt(itemId) + 1;
        e.currentTarget.parentNode.firstElementChild.src = document.querySelector('.grid').children[nextItemId].firstElementChild.src;
        e.currentTarget.parentNode.firstElementChild.dataset.id = nextItemId;
    }
});

document.querySelector('.modal__window .modal__btn-close').addEventListener('click', () => {
    document.getElementById('modal__show-image').style.display = 'none';
});
