class App {
    constructor() {
        this.data = [
            {
                name: '',
                url: '',
                id: null
            }
        ]
    }

    async setDataUrl(e) {
        this.data[0].url = e;
    }

    async handleFile(e,) {
        let file = e.target.files;
        let image = file[0];
        let reader = new FileReader();




        reader.onload = await (function (r, z) {
            return function (e,) {
                app.setDataUrl(e.target.result);
            };
        })(image, this.data);

        reader.readAsDataURL(image);
        // console.log(e.target.result);

    }

    async outTxt() {
        alert(this.txt)
    }
}

let app = new App();

let el = document.getElementById('btn');
el.addEventListener('change', async (e) => {
    try {

        await app.handleFile(e);
        console.log(app.data)

    } catch (error) {
        console.log(error)

    }


});
