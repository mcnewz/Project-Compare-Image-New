
var result =
    {
        "data": [
            {
                "type": "1",
                "size": "2"
            },
            {
                "type": "2",
                "size": "2"
            },
            {
                "type": "3",
                "size": "2"
            },
            {
                "type": "4",
                "size": "2"
            }
        ]
    }


// encrypted Tag
// var encryptedAES = CryptoJS.AES.encrypt("Message", "My sSecret Passphrase", );
// var decryptedBytes = CryptoJS.AES.decrypt(encryptedAES, "My sSecret Passphrase");
// var plaintext = decryptedBytes.toString(CryptoJS.enc.Utf8);
// console.log(plaintext);




// console.log(encodeURI(JSON.stringify(result)));
// console.log(decodeURI("%7B%22data%22:%5B%7B%22type%22:%221%22,%22size%22:%222%22%7D,%7B%22type%22:%222%22,%22size%22:%222%22%7D%5D%7D"))

// console.log(result.data.length);
// // console.log(JSON.stringify(result));
// console.log(c);


// console.log(dataResult);

// console.log(dataResult.data[0].type);
// console.log(dataResult.data[0].size);

// document.getElementById('numType').innerHTML = xx;


var count = 1;
var typexx = 1;
var x = 0;



var allCB = document.getElementsByTagName('IMG');
var textType = document.getElementById("numType");

var url = new URL(window.location.href);
var c = url.searchParams.get("type");
var resultUrl = url.searchParams.get("result");

// CONVERT STRING GET TO JSON 
dataResult = JSON.parse(resultUrl)
var typexx = dataResult.data[0].type;


textType.innerHTML = "00" + typexx;

window.onload = init();

function init() {

    allCB[0].src = 'images/' + leftImg(typexx, count);
    allCB[1].src = 'images/' + rightImg(typexx, count);

    var fancyImage = document.getElementById('fancy[0]');
    fancyImage.href = 'images/' + leftImg(typexx, count);
    var fancyImage = document.getElementById('fancy[1]');
    fancyImage.href = 'images/' + rightImg(typexx, count);
}

for (var i = 0; i < allCB.length; i++) {
    allCB[i].classList.add('img-fluid');
    // allCB[i].style.height = "900";
}


// Type Image

function beforeType() {

    if (typexx > 1) {
        typexx = dataResult.data[--x].type;
        count = 1;
        selImage('images/' + leftImg(typexx, count));
        oldImage('images/' + rightImg(typexx, count));
        console.log(textType.innerHTML = "00" + typexx);
        disposePopOver();
    }
    if (typexx == 1) {
        popOver('helloL');
    }

}

function nextType() {

    if (typexx < dataResult.data.length) {
        typexx = dataResult.data[++x].type;
        count = 1;
        selImage('images/' + leftImg(typexx, count));
        oldImage('images/' + rightImg(typexx, count));
        console.log(textType.innerHTML = "00" + typexx);
        disposePopOver();
    }
    if (typexx == dataResult.data.length) {
        popOver('helloR');
    }
}


// Next Image
function myFunctionLeft() {

    console.log("count:" + count);
    console.log("size:" + dataResult.data[typexx - 1].size);

    if (count > 1) {
        count -= 1;
        selImage('images/' + leftImg(typexx, count));
        oldImage('images/' + rightImg(typexx, count));
        disposePopOver();
    }
    if (count == 1) {
        popOver('imageL');

    }
}

function myFunctionRight() {

    console.log("count:" + count);
    console.log("size:" + dataResult.data[typexx - 1].size);

    if (count < dataResult.data[typexx - 1].size) {
        count += 1;
        selImage('images/' + leftImg(typexx, count));
        oldImage('images/' + rightImg(typexx, count));
        disposePopOver();
    }
    if (count == dataResult.data[typexx - 1].size) {
        popOver('imageR');
    }

}

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



function leftImg(type, num) {
    // $('#helloL').popover('hide')
    // $('#helloR').popover('hide')
    return 'Sel_30000489_00' + type + '_' + num + '.jpg'
}

function rightImg(type, num) {
    // $('#helloL').popover('hide')
    // $('#helloR').popover('hide')
    return 'Old_30000489_00' + type + '_' + num + '.jpg'
}



function selImage(URL) {
    // var tester = new Image();

    var tester = document.getElementById('myImage[0]');
    var fancyImage = document.getElementById('fancy[0]');
    fancyImage.href = URL;

    tester.onload = imageFound;
    tester.onerror = imageNotFound;
    tester.src = URL;
}

function oldImage(URL) {
    // var tester = new Image();

    var tester = document.getElementById('myImage[1]');
    var fancyImage = document.getElementById('fancy[1]');
    fancyImage.href = URL;

    tester.onload = imageFound;
    tester.onerror = imageNotFound;
    tester.src = URL;
}

function imageFound() {
    // alert('That image is found and loaded');


}

function imageNotFound() {
    // alert('That image was not found.');
    selImage('https://cdn.browshot.com/static/images/not-found.png')
    oldImage('https://cdn.browshot.com/static/images/not-found.png')
}
