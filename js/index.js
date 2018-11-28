//Click to switch gif
//Rocca
let projectRoccaImgSwitch = document.getElementById('projectRoccaImgSwitch');
let projectRoccaImgContainer = document.getElementById('projectRoccaImgContainer');
let projectAddRoccaBackground = document.getElementById('projectAddRoccaBackground');

projectRoccaImgContainer.onclick = function(){clickToSwitch(projectRoccaImgSwitch, projectAddRoccaBackground)};

//Simple Book
let projectSimpleBookImgSwitch = document.getElementById('projectSimpleBookImgSwitch');
let projectSimpleBookImgContainer = document.getElementById('projectSimpleBookImgContainer');
let projectAddSimpleBookBackground = document.getElementById('projectAddSimpleBookBackground');

projectSimpleBookImgContainer.onclick = function(){clickToSwitch(projectSimpleBookImgSwitch, projectAddSimpleBookBackground)};

function clickToSwitch(ele1, ele2) {
    let format = ele1.src.slice(-3);
    if (format == 'png') {
        ele1.src = ele1.src.replace('png', 'gif');
        ele2.innerHTML = '&#xe63b;';
    }else {
        ele1.src = ele1.src.replace('gif', 'png');
        ele2.innerHTML = '&#xe64e;';
    }
}

//Click to scroll
//Home
let navBarItemHome = document.getElementById('navBarItemHome');
let navBarItemAbout = document.getElementById('navBarItemAbout');
let navBarItemProject = document.getElementById('navBarItemProject');
let navBarItemContact = document.getElementById('navBarItemContact');
let navBar = document.getElementById('navBar');
let aboutMe = document.getElementById('aboutMe');
let project = document.getElementById('project');
let contact = document.getElementById('contact');

navBarItemHome.onclick = function(){clickToScroll(navBar, 0)};

navBarItemAbout.onclick = function(){clickToScroll(aboutMe, 0)};

navBarItemProject.onclick = function(){clickToScroll(project, 100)};

navBarItemContact.onclick = function(){clickToScroll(contact, 0)};


function getScrollTop(ele) {  
    let actualTop = ele.offsetTop;
    var current = ele.offsetParent;

    while (current !== null){
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}

function clickToScroll(ele, adjustment) {
    window.scrollTo({
        top: (getScrollTop(ele)-adjustment),
        left: 0,
        behavior: 'smooth'
    });
}