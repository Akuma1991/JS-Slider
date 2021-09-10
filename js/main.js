/**
 * 1- lma ados 3ala ay sora el fixedBox yban
 *
 * 2-el sora eli dost 3liha hya eli tban
 *
 * 3- lma ados 3al close el div y5tfy
 *
 * 4-lma ados 3ala ay mkan fe el div el kber y5tfy
 *
 * 5-a2lb bl ashom ymen we shmal
 *
 * 6- n2lb bl keyboard
 *
 *
 *
 *
 */

var imgs = document.getElementsByClassName("img-fluid");
var fixedBox = document.getElementById("fixedBox");
var smallBox = document.getElementById("smallBox");
var closeBtn = document.getElementById("closeBtn");
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");

// var imgsarray = Array.from(imgs); // another wat to create array
var imgsarray = [];
var index; // global

for (var i = 0; i < imgs.length; i++) {
    imgsarray.push(imgs[i]);
}





for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function (e) {

        fixedBox.classList.replace("d-none", "d-flex");
        var clickedImg = e.target;
        var imgSrc = clickedImg.getAttribute('src');
        smallBox.style.backgroundImage = `url(${imgSrc})`;
        index = imgsarray.indexOf(clickedImg);


    });
}


closeBtn.addEventListener('click', function () {

    fixedBox.classList.replace('d-flex', 'd-none');
})

fixedBox.addEventListener('click', function () {

    // fixedBox.classList.replace('d-flex','d-none');
    this.classList.replace('d-flex', 'd-none');

})


smallBox.addEventListener('click', function (e) {

    e.stopPropagation();

})


nextBtn.addEventListener('click', function () {

    index++;
    if (index == imgsarray.length) {
        index = 0;
    }
    var imgSrc = imgsarray[index].getAttribute('src');
    smallBox.style.backgroundImage = `url(${imgSrc})`;

})

prevBtn.addEventListener('click', function () {
    index--;



    if (index < 0) {
        index = imgsarray.length - 1;
    }
    var imgSrc = imgsarray[index].getAttribute('src');
    smallBox.style.backgroundImage = `url(${imgSrc})`;


})



document.addEventListener("keyup", function (e) {
    console.log(e);
    if (e.keyCode == 27 || e.code == "Escape") {
        fixedBox.classList.replace("d-flex", "d-none");
    }
});



document.addEventListener('keyup', function (e) {
    console.log(e);

    if (e.keyCode == 39 || e.code == 'ArrowRight') {
        index++;
        if (index == imgsarray.length) {
            index = 0;
        }
        var imgSrc = imgsarray[index].getAttribute('src');
        smallBox.style.backgroundImage = `url(${imgSrc})`;
    }

})

document.addEventListener('keyup', function (e) {
    console.log(e);

    if (e.keyCode == 37 || e.code == 'ArrowLeft') {
        index--;



        if (index < 0) {
            index = imgsarray.length - 1;
        }
        var imgSrc = imgsarray[index].getAttribute('src');
        smallBox.style.backgroundImage = `url(${imgSrc})`;
    }


})




window.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {

        index++;
        if (index == imgsarray.length) {
            index = 0;
        }
        var imgSrc = imgsarray[index].getAttribute('src');
        smallBox.style.backgroundImage = `url(${imgSrc})`;

    }
    else if (event.deltaY > 0) {

        index--;



        if (index < 0) {
            index = imgsarray.length - 1;
        }
        var imgSrc = imgsarray[index].getAttribute('src');
        smallBox.style.backgroundImage = `url(${imgSrc})`;


    }
});