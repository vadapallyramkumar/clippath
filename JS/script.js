init();
var textArea = document.getElementById('text');
textArea.innerHTML = `<span style="color: yellow">clip-path:</span> polygon(50% 0%,100% 0,100% 50%,100% 100%,50% 100%,0 100%,0 50%,0 0)`

/*****  Init Drag *****/
function init() {
    $(".handle").draggable({
        cursor: 'move',
        containment: '.clipboard',
        drag: handleDragStop
    });
}

/*****  on Drag handle function *****/
function handleDragStop(event, ui) {
    drawClipPath(event.target.id);
}

/*****  on Drag Change cords function *****/
const drawClipPath = (id) => {
    var prntId = document.getElementById('layer');
    var rect = prntId.getBoundingClientRect();
    var width = prntId.clientWidth;
    var height = prntId.clientHeight;
    //MOUSE POSITION PX INSIDE titleContainer
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    //MOUSE POSITION PERCENTAGE INSIDE titleContainer
    var oX = Math.floor((x / width) * 100);
    var oY = Math.floor((y / height) * 100);
    console.log(oX, oY);

    let element = document.getElementById('main');
    let clipPath = element.style.clipPath;
    let rClippath = clipPath.replace('polygon(', '').replace(')', '');
    let splitClipPath = rClippath.split(',');
    idSplit = id.split('handle');
    splitClipPath[idSplit[1]] = `${oX}% ${oY}%`;
    console.log(splitClipPath);
    let finalClipPath;
    if(splitClipPath.length > 0) {
        let cords = [];
        for(let i = 0 ; i < splitClipPath.length ; i++) {
            cords.push(splitClipPath[i]);
        }
        finalClipPath = `polygon(${cords})`;
        console.log(`polygon(${cords})`);
    }
    element.style.clipPath = finalClipPath
    textArea.innerHTML = `<span style="color: yellow">clip-path:</span> ${finalClipPath}`
}

/*****  copy code *****/
const copyCode = () => {
    let Fstr = document.getElementById("text").innerHTML;
    let str = Fstr.replace('<span style="color: yellow">', '').replace('</span>', '');
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("Copied the text: " + el.value);
};

/*****  Add ClipPath *****/
const AddclipPath = (item) => {
    console.log(item)
    let ele = item;
    let type = item.getAttribute('data-name');
    let elementClippath = ele.children[0].style.clipPath;
    addHandles(type);
    if(elementClippath) {
        document.getElementById('main').style.clipPath = elementClippath
    } else {
        console.log('selection failed')
    }
    document.getElementById('text').innerHTML = `<span style="color: yellow">clip-path:</span> ${elementClippath}`
}

/*****  Add Handles *****/
const addHandles = (type) => {
    switch(type) {
        case 'Triangle':
            ele = `<div class="handle" id="handle0" draggable="true" data-handle="0"
                    style="top: -10px; left: 48%;"></div>
                <div class="handle" id="handle1" draggable="true" data-handle="1"
                    style="bottom: -10px; left: -10px;"></div>
                <div class="handle" id="handle2" draggable="true" data-handle="2"
                    style="bottom: -10px; left: 98%;"></div>`;
            console.log(ele);
            document.getElementById('tsOctagon').innerHTML = ele;
        break;
        case 'Trapezoid':
            ele = `<div class="handle" id="handle0" draggable="true" data-handle="0"
                    style="top: -10px; left: 18%;"></div>
                <div class="handle" id="handle1" draggable="true" data-handle="1"
                    style="top: -10px; left: 78%;"></div>
                <div class="handle" id="handle2" draggable="true" data-handle="2"
                    style="bottom: -10px; left: 98%;"></div>
                <div class="handle" id="handle3" draggable="true" data-handle="2"
                style="bottom: -10px; left: -10px;"></div>`;
            console.log(ele);
            document.getElementById('tsOctagon').innerHTML = ele;
        break;
        case 'Parallelogram':
            ele = `<div class="handle" id="handle0" draggable="true" data-handle="0"
                    style="top: -10px; left: 23%;"></div>
                <div class="handle" id="handle1" draggable="true" data-handle="1"
                    style="top: -10px; left: 98%;"></div>
                <div class="handle" id="handle2" draggable="true" data-handle="2"
                    style="bottom: -10px; left: 72%;"></div>
                <div class="handle" id="handle3" draggable="true" data-handle="2"
                style="bottom: -10px; left: -10px;"></div>`;
            console.log(ele);
            document.getElementById('tsOctagon').innerHTML = ele;
        break;
        case 'Rhombus':
            ele = `<div class="handle" id="handle0" draggable="true" data-handle="0"
                    style="top: -10px; left: 48%;"></div>
                <div class="handle" id="handle1" draggable="true" data-handle="1"
                    style="top: 47%; left: 98%;"></div>
                <div class="handle" id="handle2" draggable="true" data-handle="2"
                    style="bottom: -10px; left: 48%;"></div>
                <div class="handle" id="handle3" draggable="true" data-handle="2"
                style="top: 48%; left: -10px;"></div>`;
            console.log(ele);
            document.getElementById('tsOctagon').innerHTML = ele;
        break;
        case 'Pentagon':
            ele = `<div class="handle" id="handle0" draggable="true" data-handle="0"
                    style="top: -10px; left: 48%;"></div>
                <div class="handle" id="handle1" draggable="true" data-handle="1"
                    style="top: 35%; left: 98%;"></div>
                <div class="handle" id="handle2" draggable="true" data-handle="2"
                    style="bottom: -10px; left: 80%;"></div>
                <div class="handle" id="handle3" draggable="true" data-handle="2"
                style="bottom: -10px; left: 16%;"></div>
                <div class="handle" id="handle4" draggable="true" data-handle="2"
                style="top: 36%; left: -10px;"></div>`;
            console.log(ele);
            document.getElementById('tsOctagon').innerHTML = ele;
        break;
        case 'Hexagon':
            ele = `<div class="handle" id="handle0" draggable="true" data-handle="0"
                    style="top: -10px; left: 48%;"></div>
                <div class="handle" id="handle1" draggable="true" data-handle="1"
                    style="top: 23%; left: 98%;"></div>
                <div class="handle" id="handle2" draggable="true" data-handle="2"
                    style="top: 73%; left: 98%;"></div>
                <div class="handle" id="handle3" draggable="true" data-handle="2"
                style="bottom: -10px; left: 48%;"></div>
                <div class="handle" id="handle4" draggable="true" data-handle="2"
                style="top: 72%; left: -10px;"></div>
                <div class="handle" id="handle5" draggable="true" data-handle="2"
                style="top: 23%; left: -10px;"></div>`;
            console.log(ele);
            document.getElementById('tsOctagon').innerHTML = ele;
        break;
        case 'Heptagon':
            ele = `<div class="handle" id="handle0" draggable="true" data-handle="0"
                    style="top: -10px; left: 48%;"></div>
                <div class="handle" id="handle1" draggable="true" data-handle="1"
                    style="top: 17%; left: 88%;"></div>
                <div class="handle" id="handle2" draggable="true" data-handle="2"
                    style="top: 57%; left: 98%;"></div>
                <div class="handle" id="handle3" draggable="true" data-handle="2"
                style="bottom: -10px; left: 73%;"></div>
                <div class="handle" id="handle4" draggable="true" data-handle="2"
                style="bottom: -10px; left: 23%;"></div>
                <div class="handle" id="handle5" draggable="true" data-handle="2"
                style="top: 58%; left: -10px;"></div>
                <div class="handle" id="handle6" draggable="true" data-handle="2"
                style="top: 18%; left: 7%;"></div>`;
            console.log(ele);
            document.getElementById('tsOctagon').innerHTML = ele;
        break;
        case 'Octagon':
            ele = `<div class="handle" id="handle0" draggable="true" data-handle="0"
                    style="top: -10px; left: 27%;"></div>
                <div class="handle" id="handle1" draggable="true" data-handle="1"
                    style="top: -10px; left: 67%;"></div>
                <div class="handle" id="handle2" draggable="true" data-handle="2"
                    style="top: 27%; left: 98%;"></div>
                <div class="handle" id="handle3" draggable="true" data-handle="2"
                style="top: 68%; left: 98%;"></div>
                <div class="handle" id="handle4" draggable="true" data-handle="2"
                style="bottom: -10px; left: 67%;"></div>
                <div class="handle" id="handle5" draggable="true" data-handle="2"
                style="bottom: -10px; left: 27%;"></div>
                <div class="handle" id="handle6" draggable="true" data-handle="2"
                style="top: 66%; left: -10px;"></div>
                <div class="handle" id="handle7" draggable="true" data-handle="2"
                style="top: 27%; left: -10px;"></div>`;
            console.log(ele);
            document.getElementById('tsOctagon').innerHTML = ele;
        break;
        case 'Nonagon':
            ele = `<div class="handle" id="handle0" draggable="true" data-handle="0"
                    style="top: -10px; left: 48%;"></div>
                <div class="handle" id="handle1" draggable="true" data-handle="1"
                    style="top: 9%; left: 80%;"></div>
                <div class="handle" id="handle2" draggable="true" data-handle="2"
                    style="top: 41%; left: 98%;"></div>
                <div class="handle" id="handle3" draggable="true" data-handle="2"
                style="top: 75%; left: 92%;"></div>
                <div class="handle" id="handle4" draggable="true" data-handle="2"
                style="bottom: -10px; left: 66%;"></div>
                <div class="handle" id="handle5" draggable="true" data-handle="2"
                style="bottom: -10px; left: 29%;"></div>
                <div class="handle" id="handle6" draggable="true" data-handle="2"
                style="top: 75%; left: 3%;"></div>
                <div class="handle" id="handle7" draggable="true" data-handle="2"
                style="top: 40%; left: -10px;"></div>
                <div class="handle" id="handle8" draggable="true" data-handle="2"
                style="top: 9%; left: 15%;"></div>`;
            console.log(ele);
            document.getElementById('tsOctagon').innerHTML = ele;
        break;
        case 'Decagon':
            ele = `<div class="handle" id="handle0" draggable="true" data-handle="0"
                    style="top: -10px; left: 48%;"></div>
                <div class="handle" id="handle1" draggable="true" data-handle="1"
                    style="top: 7%; left: 78%;"></div>
                <div class="handle" id="handle2" draggable="true" data-handle="2"
                    style="top: 33%; left: 98%;"></div>
                <div class="handle" id="handle3" draggable="true" data-handle="2"
                style="top: 67%; left: 98%;"></div>
                <div class="handle" id="handle4" draggable="true" data-handle="2"
                style="top: 88%; left: 77%;"></div>
                <div class="handle" id="handle5" draggable="true" data-handle="2"
                style="bottom: -10px; left: 47%;"></div>
                <div class="handle" id="handle6" draggable="true" data-handle="2"
                style="top: 87%; left: 16%;"></div>
                <div class="handle" id="handle7" draggable="true" data-handle="2"
                style="top: 67%; left: -10px;"></div>
                <div class="handle" id="handle8" draggable="true" data-handle="2"
                style="top: 32%; left: -10px;"></div>
                <div class="handle" id="handle9" draggable="true" data-handle="2"
                style="top: 8%; left: 16%;"></div>`;
            console.log(ele);
            document.getElementById('tsOctagon').innerHTML = ele;
        break;
        case 'Bevel':
            ele = `<div class="handle" id="handle0" draggable="true" data-handle="0"
                    style="top: -10px; left: 17%;"></div>
                <div class="handle" id="handle1" draggable="true" data-handle="1"
                    style="top: -10px; left: 78%;"></div>
                <div class="handle" id="handle2" draggable="true" data-handle="2"
                    style="top: 17%; left: 98%;"></div>
                <div class="handle" id="handle3" draggable="true" data-handle="2"
                style="top: 77%; left: 98%;"></div>
                <div class="handle" id="handle4" draggable="true" data-handle="2"
                style="bottom: -10px; left: 77%;"></div>
                <div class="handle" id="handle5" draggable="true" data-handle="2"
                style="bottom: -10px; left: 17%;"></div>
                <div class="handle" id="handle6" draggable="true" data-handle="2"
                style="top: 78%; left: -10px;"></div>
                <div class="handle" id="handle7" draggable="true" data-handle="2"
                style="top: 17%; left: -10px;"></div>`;
            console.log(ele);
            document.getElementById('tsOctagon').innerHTML = ele;
        break;
        case 'LeftArrow':
            ele = `<div class="handle" id="handle0" draggable="true" data-handle="0"
                    style="top: -10px; left: 37%;"></div>
                <div class="handle" id="handle1" draggable="true" data-handle="1"
                    style="top: 16%; left: 38%;"></div>
                <div class="handle" id="handle2" draggable="true" data-handle="2"
                    style="top: 17%; left: 98%;"></div>
                <div class="handle" id="handle3" draggable="true" data-handle="2"
                style="top: 77%; left: 98%;"></div>
                <div class="handle" id="handle4" draggable="true" data-handle="2"
                style="top: 78%; left: 38%;"></div>
                <div class="handle" id="handle5" draggable="true" data-handle="2"
                style="bottom: -10px; left: 37%;"></div>
                <div class="handle" id="handle6" draggable="true" data-handle="2"
                style="top: 47%; left: -10px;"></div>`;
            console.log(ele);
            document.getElementById('tsOctagon').innerHTML = ele;
        break;
        case 'RightArrow':
            ele = `<div class="handle" id="handle0" draggable="true" data-handle="0"
                    style="top: 17%; left: -10px;"></div>
                <div class="handle" id="handle1" draggable="true" data-handle="1"
                    style="top: 17%; left: 57%;"></div>
                <div class="handle" id="handle2" draggable="true" data-handle="2"
                    style="top: -10px; left: 58%;"></div>
                <div class="handle" id="handle3" draggable="true" data-handle="2"
                style="top: 47%; left: 98%;"></div>
                <div class="handle" id="handle4" draggable="true" data-handle="2"
                style="bottom: -10px; left: 58%;"></div>
                <div class="handle" id="handle5" draggable="true" data-handle="2"
                style="top: 78%; left: 57%;"></div>
                <div class="handle" id="handle6" draggable="true" data-handle="2"
                style="top: 77%; left: -10px;"></div>`;
            console.log(ele);
            document.getElementById('tsOctagon').innerHTML = ele;
        break;
        case 'Star':
            ele = `<div class="handle" id="handle0" draggable="true" data-handle="0"
                    style="top: -10px; left: 48%;"></div>
                <div class="handle" id="handle1" draggable="true" data-handle="1"
                    style="top: 32%; left: 59%;"></div>
                <div class="handle" id="handle2" draggable="true" data-handle="2"
                    style="top: 33%; left: 95%;"></div>
                <div class="handle" id="handle3" draggable="true" data-handle="2"
                style="top: 55%; left: 66%;"></div>
                <div class="handle" id="handle4" draggable="true" data-handle="2"
                style="top: 88%; left: 77%;"></div>
                <div class="handle" id="handle5" draggable="true" data-handle="2"
                style="top: 69%; left: 48%;"></div>
                <div class="handle" id="handle6" draggable="true" data-handle="2"
                style="top: 88%; left: 19%;"></div>
                <div class="handle" id="handle7" draggable="true" data-handle="2"
                style="top: 55%; left: 28%;"></div>
                <div class="handle" id="handle8" draggable="true" data-handle="2"
                style="top: 33%; left: 0.5%;"></div>
                <div class="handle" id="handle9" draggable="true" data-handle="2"
                style="top: 33%; left: 36%;"></div>`;
            console.log(ele);
            document.getElementById('tsOctagon').innerHTML = ele;
        break;
        case 'Cross':
            ele = `<div class="handle" id="handle0" draggable="true" data-handle="0"
                    style="top: 23%; left: 7%;"></div>
                <div class="handle" id="handle1" draggable="true" data-handle="1"
                    style="top: 21%; left: 32%;"></div>
                <div class="handle" id="handle2" draggable="true" data-handle="2"
                    style="top: -10px; left: 33%;"></div>
                <div class="handle" id="handle3" draggable="true" data-handle="2"
                style="top: -10px; left: 63%;"></div>
                <div class="handle" id="handle4" draggable="true" data-handle="2"
                style="top: 21%; left: 63%;"></div>
                <div class="handle" id="handle5" draggable="true" data-handle="2"
                style="top: 22%; left: 88%;"></div>
                <div class="handle" id="handle6" draggable="true" data-handle="2"
                style="top: 46%; left: 88%;"></div>
                <div class="handle" id="handle7" draggable="true" data-handle="2"
                style="top: 46%; left: 63%;"></div>
                <div class="handle" id="handle8" draggable="true" data-handle="2"
                style="top: 98%; left: 62%;"></div>
                <div class="handle" id="handle9" draggable="true" data-handle="2"
                style="top: 98%; left: 33%;"></div>
                <div class="handle" id="handle10" draggable="true" data-handle="2"
                style="top: 48%; left: 33%;"></div>
                <div class="handle" id="handle11" draggable="true" data-handle="2"
                style="top: 48%; left: 8%;"></div>`;
            console.log(ele);
            document.getElementById('tsOctagon').innerHTML = ele;
        break;
        case 'Message':
            ele = `<div class="handle" id="handle0" draggable="true" data-handle="0"
                    style="top: -10px; left: -10px;"></div>
                <div class="handle" id="handle1" draggable="true" data-handle="1"
                    style="top: -10px; left: 98%;"></div>
                <div class="handle" id="handle2" draggable="true" data-handle="2"
                    style="top: 72%; left: 98%;"></div>
                <div class="handle" id="handle3" draggable="true" data-handle="2"
                style="top: 72%; left: 73%;"></div>
                <div class="handle" id="handle4" draggable="true" data-handle="2"
                style="top: 97%; left: 73%;"></div>
                <div class="handle" id="handle5" draggable="true" data-handle="2"
                style="top: 72%; left: 48%;"></div>
                <div class="handle" id="handle6" draggable="true" data-handle="2"
                style="top: 72%; left: -10px;"></div>`;
            console.log(ele);
            document.getElementById('tsOctagon').innerHTML = ele;
        break;
        case 'Close':
            ele = `<div class="handle" id="handle0" draggable="true" data-handle="0"
                    style="top: -5px; left: 17%;"></div>
                <div class="handle" id="handle1" draggable="true" data-handle="1"
                    style="top: 17%; left: -10px;"></div>
                <div class="handle" id="handle2" draggable="true" data-handle="2"
                    style="top: 48%; left: 27%;"></div>
                <div class="handle" id="handle3" draggable="true" data-handle="2"
                style="top: 77%; left: -10px;"></div>
                <div class="handle" id="handle4" draggable="true" data-handle="2"
                style="top: 98%; left: 18%;"></div>
                <div class="handle" id="handle5" draggable="true" data-handle="2"
                style="top: 69%; left: 48%;"></div>
                <div class="handle" id="handle6" draggable="true" data-handle="2"
                style="top: 97%; left: 78%;"></div>
                <div class="handle" id="handle7" draggable="true" data-handle="2"
                style="top: 77%; left: 98%;"></div>
                <div class="handle" id="handle8" draggable="true" data-handle="2"
                style="top: 48%; left: 68%;"></div>
                <div class="handle" id="handle9" draggable="true" data-handle="2"
                style="top: 17%; left: 98%;"></div>
                <div class="handle" id="handle10" draggable="true" data-handle="2"
                style="top: -10px; left: 78%;"></div>
                <div class="handle" id="handle11" draggable="true" data-handle="2"
                style="top: 26%; left: 48%;"></div>`;
            console.log(ele);
            document.getElementById('tsOctagon').innerHTML = ele;
        break;
        case 'Custom':
            ele = `<div class="handles" id="tsOctagon">
                <div class="handle" id="handle7" draggable="true" data-handle="0"
                    style="top: -10px; left: -10px;"></div>
                <div class="handle" id="handle0" draggable="true" data-handle="1"
                    style="top: -10px; left: 50%;"></div>
                <div class="handle" id="handle1" draggable="true" data-handle="2"
                    style="top: -10px; left: 98%;"></div>
                <div class="handle" id="handle6" draggable="true" data-handle="3"
                    style="top: 50%; left: -10px;"></div>
                <div class="handle" id="handle2" draggable="true" data-handle="4" style="top: 50%; left: 98%;">
                </div>
                <div class="handle" id="handle5" draggable="true" data-handle="5"
                    style="top: 98%; left: -10px;"></div>
                <div class="handle" id="handle4" draggable="true" data-handle="6" style="top: 98%; left: 50%;">
                </div>
                <div class="handle" id="handle3" draggable="true" data-handle="7" style="top: 98%; left: 98%;">
                </div>
            </div>`;
            console.log(ele);
            document.getElementById('tsOctagon').innerHTML = ele;
            break;
    }
    init();
}

let shapes = document.getElementsByClassName('gallery-cell');
for (var i = 0; i < shapes.length; i++) {
    // shapes[i].addEventListener('click', AddclipPath, false);
    shapes[i].addEventListener("click", function () {
        AddclipPath(this);
    }, false);
}