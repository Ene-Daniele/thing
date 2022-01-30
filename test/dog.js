export default class Dog {

    #name;
    #age;

    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }

    bark(){
        console.log("barking");
    }
    
    get name(){ //Getter
        return this.#name;
    }

    setName(name){ //Setter
        this.#name = name;
    }
}