
var result =
    {
        "data": [
            {
                "type": "1",
                "size": "2",
                "id": "30000489"
            }
        ]
    }

var count = 1;
var typexx = 1;

var allCB = document.getElementsByTagName('IMG');
var textType = document.getElementById("numType");

// CONVERT STRING GET TO JSON 
var url = new URL(window.location.href);
var resultUrl = url.searchParams.get("result");
dataResult = JSON.parse(resultUrl)
var typexx = dataResult.data[0].type;
var size = dataResult.data[0].size;
var id = dataResult.data[0].id;





window.onload = init();
function init() {
    selImage('images/' + leftImg(typexx, count));
    oldImage('images/' + rightImg(typexx, count));

    var fancyImage = document.getElementById('fancy[0]');

    var fancyImage = document.getElementById('fancy[1]');

    textType.innerHTML = "แผ่นที่ " + count + "/" + size;
   
}

// Add class css
for (var i = 0; i < allCB.length; i++) {
    allCB[i].classList.add('img-fluid');
}

// Next Image
function myFunctionLeft() {

    if (count > 1) {
        
        count -= 1;
        textType.innerHTML = "แผ่นที่ " + count + "/" + size;

        selImage('images/' + leftImg(typexx, count));
        oldImage('images/' + rightImg(typexx, count));
        disposePopOver();
        
    }
    if (count == 1) {
        popOver('imageL');
    }
}

function myFunctionRight() {

    if (count < dataResult.data[0].size) {
        
        count += 1;
        textType.innerHTML = "แผ่นที่ " + count + "/" + size;

        selImage('images/' + leftImg(typexx, count));
        oldImage('images/' + rightImg(typexx, count));
        disposePopOver();
    }
    if (count == dataResult.data[0].size) {
        popOver('imageR');
    }

}

// Fancybox zoom image
function popOver(id) {
    $(function () {
        $('#' + id).popover({
            trigger: 'click ',
            container: 'body',
            title: '',
            content: 'End ',
            placement: 'bottom'

        })
    })
}

function disposePopOver() {
    $('#imageL').popover('dispose')
    $('#imageR').popover('dispose')
    $('#helloL').popover('dispose')
    $('#helloR').popover('dispose')

}

function leftImg(type, count) {
    return 'Old_' + id + '_' + pad(type, 3) + '_' + count + '.jpg'
}

function rightImg(type, count) {
    return 'Sel_' + id + '_' + pad(type, 3) + '_' + count + '.jpg'
}



function selImage(URL) {
    // var tester = new Image();

    var selImage = document.getElementById('myImage[0]');
    
    selImage.onload = imageFound;
    selImage.onerror = imageNotFound;
    selImage.src = URL;
}

function oldImage(URL) {
    // var tester = new Image();

    var oldImage = document.getElementById('myImage[1]');

    oldImage.onload = imageFound;
    oldImage.onerror = imageNotFound;
    oldImage.src = URL;
}

function imageFound() {
    // alert('That image is found and loaded');


}

function imageNotFound() {
    // alert('That image was not found.');
    selImage('icon/not-found.png')
    oldImage('icon/not-found.png')
}

function pad(num, size) {
    var s = "000" + num;
    return s.substr(s.length - size);
}

