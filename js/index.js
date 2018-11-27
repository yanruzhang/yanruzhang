//Click to switch gif
let projectRoccaImgSwitch = document.getElementById('projectRoccaImgSwitch');
let projectRoccaImgContainer = document.getElementById('projectRoccaImgContainer');
let projectAddBackground = document.getElementById('projectAddBackground');

projectRoccaImgContainer.onclick = function(){clickToSwitch(projectRoccaImgSwitch)};

function clickToSwitch(ele) {
    let format = ele.src.slice(-3);
    if (format == 'png') {
        ele.src = ele.src.replace('png', 'gif');
        projectAddBackground.innerHTML = '&#xe63b;';
    }else {
        ele.src = ele.src.replace('gif', 'png');
        projectAddBackground.innerHTML = '&#xe64e;';
    }
}

//Onmouseover to add background

// projectRoccaImgContainer.onmouseover = function () {mouseOver(projectRoccaImgContainer)};
// projectRoccaImgContainer.onmouseout = function () {mouseOut(projectRoccaImgContainer)};

// function mouseOver(ele) {
//     projectAddBackground.style.width = "100%";
// }
// function mouseOut(ele) {
//     projectAddBackground.style.width = "100%";
// }