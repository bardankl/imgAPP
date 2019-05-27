let data = [];

class App {
    constructor() {
        this.imgUrl = '';
        this.fileName = '';
        this.fileSize = null;
        this.renderPosition = null;
        this.fileExtension = '';
    }

    setDataUrl(url, fileName, fileSize, id) {
        this.imgUrl = url;
        this.fileName = fileName;
        this.fileSize = `${fileSize} bytes`;
        this.renderPosition = id;
    };

    getParams() {
        return `name->${this.fileName} SIZE->${this.fileSize} id ->${this.renderPosition} ${this.imgUrl}`
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
    let element = document.getElementById('contentContainer');
    element.innerHTML = '';
    arr.forEach((file) => {
        let span = document.createElement('span');
        if(file){

        let contentContainerFirstChild = element.children[file.renderPosition];
        span.innerHTML = `<img class="img" src="${file.imgUrl}" title="${file.fileName}"/>`;

        element.insertBefore(span, contentContainerFirstChild)}
    });


};

let fileHandler = async function (e) {
    try {
        let app1 = new App();
        let file = e.target.files[0];
        let id = e.target.id;
        let filesUrl = await processFile(e);
        let renderPosition = id[id.length-1];
        console.log(renderPosition);
        app1.setDataUrl(filesUrl, file.name, file.size, renderPosition);
        data[renderPosition-1] = app1;
        render(data)

    } catch (error) {
        console.log(error)

    }
};

let z = document.getElementsByClassName('inputForImg');
let addListener = () => {
    for (let i = 0; i < z.length; i++) {
        z[i].addEventListener('change', fileHandler)
    }
};
addListener();

addInput = () => {
    let container = document.getElementById('inputContainer');
    let counter = (container.children.length / 2 + 1);
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
    addListener();

};
