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

    async handleFile(e) {
        let file = e.target.files;
        let image = file[0];
        console.log(image);

        console.log(e.target.result);
        let reader = new FileReader();


        reader.onload = (function () {
            return function (e, obj) {
                // this.data[0].url = e.target.result;

                console.log(obj);
                console.log(e.target.result);
                console.log()
                // span.innerHTML = [`<img class="thumb"`, '" src="', e.target.result, '" />'].join('');

            };
        })(image, this.data);
        reader.readAsDataURL(image);


    }

    async outTxt() {
        alert(this.txt)
    }
}

let app = new App();

let el = document.getElementById('btn');
el.addEventListener('change', async (e) => {
    try {
        console.log();
        await app.handleFile(e);

    } catch (error) {
        console.log(error)

    }


});
