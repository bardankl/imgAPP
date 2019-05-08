'use strict';
const input1 = document.getElementById('img1');
const input2 = document.getElementById('img2');

const handleAddedFiles = (e) => {
    let file = e.target.files;
    let alreadyGotImage = document.getElementById('contentContainer');
    let span = document.createElement('span');
    let element = document.getElementById('contentContainer');

    if (!file[0].type.match('image.*')) {
        alert(`Please choose image only`);
        file = [];
    }
    let image = file[0];
    let reader = new FileReader();
    if (!alreadyGotImage.children.length) {
        reader.onload = (function (file) {
            return function (e) {
                span.innerHTML = ['<img class="thumb"', '" src="', e.target.result, '" />'].join('');
                element.appendChild(span);
            };
        })(image);
        reader.readAsDataURL(image);
        let contentContainerFirstChild = element.children.length;
        console.log(contentContainerFirstChild);
    } else {
        reader.onload = (function (file) {
            return function (e) {
                let contentContainerFirstChild = element.children.length;
                let clickedElementId = e.target.id;
                span.innerHTML = ['<img class="thumb"', '" src="', e.target.result, '" />'].join('');
                console.log(contentContainerFirstChild);
                contentContainerFirstChild && clickedElementId === 'img1' ?
                    element.insertBefore(span, contentContainerFirstChild) :
                    element.appendChild(span)
                ;
            };
        })(image);
        reader.readAsDataURL(image);


    }
};

input1.addEventListener("change", handleAddedFiles);
input2.addEventListener("change", handleAddedFiles);

//todo http://qaru.site/questions/76909/how-to-check-if-element-has-any-children-in-javascript
