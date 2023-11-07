class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    run = function() {
        console.log(`${this.name} ${this.color}이 달린다.`);
    }
}

class bam extends Pet {
    constructor(name, color, breed) {
        super(name, color);
        this.breed = breed;
    }

    viewInfor() {
        console.log(`이름 : ${this.name}`)
    }
}