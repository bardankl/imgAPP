'use strict';
const input1 = document.getElementById('img1');
const input2 = document.getElementById('img2');

let functioncCallCounter = 0;
const handleAddedFiles = (e) => {
    let file = e.target.files;
    let clickedElementId = e.target.id;
    let alreadyGotImage = document.getElementById('contentContainer');
    let span = document.createElement('span');
    let element = document.getElementById('contentContainer');
    console.log(`start of the function ${functioncCallCounter}`);
    if (!file[0].type.match('image.*')) {
        alert(`Please choose image only`);
        file = [];
        functioncCallCounter--;
    }
    functioncCallCounter++;
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

    } else {
        reader.onload = (function (file) {
            return function (e,) {
                let contentContainerFirstChild = element.children[0];
                span.innerHTML = ['<img class="thumb"', '" src="', e.target.result, '" />'].join('');

                functioncCallCounter && clickedElementId === 'img1' ?
                    element.insertBefore(span, contentContainerFirstChild) :
                    element.appendChild(span)
                ;
            };
        })(image, clickedElementId);
        reader.readAsDataURL(image);


    }
};

input1.addEventListener("change", handleAddedFiles);
input2.addEventListener("change", handleAddedFiles);

//todo http://qaru.site/questions/76909/how-to-check-if-element-has-any-children-in-javascript
