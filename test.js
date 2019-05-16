

class Element {
    constructor () {
        this. text = '';
    }
    // async setName () {
    //     this.text = this.gettingValue();
    //     console.log(this.text)
    // }
    async gettingValue () {
        let elem = document.getElementById('txt');
        this.text = elem.value;
        return elem.value;
    }
}
let element = new Element();
async function main (){


    setTimeout(()=>{console.log(`!!!!!!!${element.text}`)}, 5000);

};
main();