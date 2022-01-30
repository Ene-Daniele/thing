import Dog from "./dog.js"; //VisualStudioCode/GitPod medde in automatico gli import, ma non mette ".js" alla fine, ricordate di metterlo! 
import SuperDog from "./superDog.js";

let normalDog = new Dog("normal guy", 12);
let superDog = new SuperDog("super guy", 14, "flying"); //La classe SuperDog eredita la classe Dog

console.log("//Normal dog");
normalDog.bark();
console.log(normalDog.name); //Usiamo il metodo getter cosi in JavaScript

console.log("//Special dog");
superDog.bark();
console.log(superDog.superPower);
console.log(superDog.name);


