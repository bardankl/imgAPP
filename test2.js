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

    async handleFile(e,obj) {
        let files = e.target.files;
        let image = files[0];
        console.log(`enter 1 `);

        function readFileAsync(image) {
            console.log(`enter 2`);
            return new Promise((resolve, reject) => {
                let reader = new FileReader();
                console.log(`enter 3`);

                reader.onload = () => {
                    resolve(reader.result);
                    console.log(`enter 4`);

                };

                reader.onerror = reject;
                console.log(`enter 5`);

                reader.readAsDataURL(image);
            })
        }

        async function processFile(obj) {
            console.log(`enter 6`);

            try {
                console.log(obj);
                let file = document.getElementById('btn').files[0];
                let contentBuffer = await readFileAsync(file);
                console.log(contentBuffer);
                console.log(obj);
            } catch (err) {
                console.log(err);
            }
        }

        processFile(obj)
    }
}


let el = document.getElementById('btn');
el.addEventListener('change', async function (e) {
    try {
        let app1 = new App();
        await app1.handleFile(e,app1);
        console.log(app1.imgUrl);


    } catch (error) {
        console.log(error)

    }


});
