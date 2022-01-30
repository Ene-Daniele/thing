import Dog from "./dog.js";

export default class SuperDog extends Dog {

    #superPower;

    constructor(name, age, superPower){
        super(name, age);
        this.#superPower = superPower;
    }

    specialMove(){
        console.log(this.superPower);
    }
    
    bark(){
        console.log("Super bark!");
    }

    get superPower(){
        return this.#superPower
    }
}