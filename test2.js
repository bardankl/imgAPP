let data = [];
let firstInput = document.getElementById('firstInput');
let secondInput = document.getElementById('secondInput');

class App {
    constructor() {
        this.imgUrl = '';
        this.fileName = '';
        this.fileSize = null;
        this.inputNumber = null;
        this.fileExtension = '';
    }

    setDataUrl(url, fileName, fileSize, id) {
        this.imgUrl = url;
        this.fileName = fileName;
        this.fileSize = `${fileSize} bytes`;
        this.inputNumber = id;
    };

    getParams() {
        return `name->${this.fileName} SIZE->${this.fileSize} id ->${this.inputNumber} ${this.imgUrl}`
    }
}

function readFileAsync(image) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(image);
    })
}

async function processFile(e) {
    try {
        let file = e.target.files[0];
        let contentBuffer = await readFileAsync(file);
        return contentBuffer;
    } catch (err) {
        console.log(err);
    }
}

let render = (arr) => {
    let span = document.createElement('span');
    let element = document.getElementById('contentContainer');
    let contentContainerFirstChild = element.children[0];
    arr.forEach((file) => {
        span.innerHTML = `<img class="img" src="${file.imgUrl}" title="${file.fileName}"/>`;
    });
    arr[0].inputNumber === 1 ? element.appendChild(span) : element.insertBefore(span, contentContainerFirstChild)

};

let fileHandler = async function (e) {
    try {
        let app1 = new App();
        let file = e.target.files[0];
console.log('oh, hi there');
        if (data.length >= 2) {
            alert(`sorry you already pick two images`);
        } else {
            let filesUrl = await processFile(e);
            let inputNumber = (e.target.id !== 'secondInput' ? 1 : 2);
            app1.setDataUrl(filesUrl, file.name, file.size, inputNumber);
            data.push(app1);
            render(data)
        }


    } catch (error) {
        console.log(error)

    }
};
//todo 1.  подключить второй файл ридер, организовать порядок добавления.
firstInput.addEventListener('change', fileHandler);
secondInput.addEventListener('change', fileHandler);



let z = document.getElementsByClassName('inputForImg');
z[2].addEventListener('change', fileHandler);

addInput= ()=> {
   let container = document.getElementById('inputContainer');
    let counter = (container.children.length/2+1);
    let input = document.createElement('input');
    input.type = "file";
    input.className = "inputForImg";
    input.id = `input${counter}`;
    input.setAttribute('accept', 'image/*');
    let label = document.createElement('label');
    label.className = "labelForImgInput";
    label.for = `input-${counter}`;
    label.setAttribute("for", `input${counter}`);

    label.innerText = `Choose another image`;

    container.appendChild(label);
    container.appendChild(input);

};
