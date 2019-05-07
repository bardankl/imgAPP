'use strict';
const input1 = document.getElementById('img1');
const input2 = document.getElementById('img2');

const handleAddedFiles = (e)=> {
    let file = e.target.files;
console.log(e.target.id);

    if (!file[0].type.match('image.*')){
        alert(`Please choose image only`);
        file = [];
    }

    let image = file[0];
    var reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = (function(theFile) {
        return function(e) {
            // Render thumbnail.
            var span = document.createElement('span');
            span.innerHTML = ['<img class="thumb" title="', encodeURI(theFile.name), '" src="', e.target.result, '" />'].join('');
            document.getElementById('contentContainer').insertBefore(span, null);
        };
    })(image);
    // Read in the image file as a data URL.
    reader.readAsDataURL(image);

};

input1.addEventListener("change", handleAddedFiles);
input2.addEventListener("change", handleAddedFiles);

//todo http://qaru.site/questions/76909/how-to-check-if-element-has-any-children-in-javascript