class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    run() {
        document.write(`<h1>${this.color} ${this.name}이(가) 달린다.</h2>`);
    }
}

const bam = new Pet("밤", "black");
bam.run();