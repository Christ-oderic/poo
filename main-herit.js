'use strict'

class User{
    #password
    constructor( firstName, lastName, password ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.#password = password;
    };

    fullName (firstName, lastName){
        return `${firstName}${lastName}`;
    };

    get password(){
        return this.#password;
    };
};

class Admin extends User{
    #right
    constructor( firstName, lastName, password, right){
        super( firstName, lastName, password );
        this.#right = right;
    }

    get right(){
        return this.#right;
    };

    set right(newRight){
        this.#right = newRight;
    };
    canEditArticles(){
        return true;
    };
};

console.log(User);

console.log(Admin);


let user1 = new User(" Septuner ", " Christopher ", "555ssge")
console.log(user1);

console.log(user1.password);

let Admini = new Admin( " Oderic ", " YASSINGUEZO ");
console.log(Admini);
console.log(Admini.canEditArticles());
console.log(Admini.fullName(Admini.firstName, Admini.lastName));

Admini.right = "ok";
console.log(Admini);

