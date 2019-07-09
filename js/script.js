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





