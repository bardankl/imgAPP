let data = [];
class App {
    constructor() {
        this.imgUrl = '';
        this.fileName = '';
        this.fileSize = null;
        this.id = null;
        this.fileExtension = '';
    }

    setDataUrl(obj) {
                this.imgUrl = obj;

        };

    async handleFile(e) {
        await new Promise((resolve, reject)=>{
            try {
                let files = e.target.files;
                let image = files[0];
                let reader = new FileReader();
                this.fileName = image.name;
                this.fileSize = image.size;
                this.id = (e.target.id !== 'secondImg' ? this.id = 1 : this.id = 2);
                reader.onload = (function () {
                        let z = e.target.result;
                        console.log(z);
                        console.log(reader);

                    return function (e) {
                            console.log(e)

                        return e.target.result;

                    };

                })(e);
                reader.readAsDataURL(image);

            }
            catch(error){
                reject(error);
            }
        });
    }

    render() {
        let span = document.createElement('span');
        let element = document.getElementById('contentContainer');
        span.innerHTML = [`<img class="img"`, `src="${this.imgUrl}"/>`].join('');

        element.appendChild(span);

    }
}
let render = (arr)=> {
    let span = document.createElement('span');
    let element = document.getElementById('contentContainer');

    arr.forEach((el)=>{
        span.innerHTML = [`<img class="img"`, `src="${el.imgUrl}"/>`].join('');
        element.appendChild(span);
    })
};


let el = document.getElementById('btn');
el.addEventListener('change', async function(e) {
    try {
        let app1 = new App();
        await app1.handleFile(e);
        data.push(app);
        render(data);

    } catch (error) {
        console.log(error)

    }


});
