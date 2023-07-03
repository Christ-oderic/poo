'use strict'
class Personnage{
    constructor(Name = "", Hp = 100, Ex = 0, inventaire=[], Equipé=[], Magie = 0){
        this.Name = Name;
        this.Hp = Hp;
        this.Ex = Ex;
        this.inventaire = inventaire;
        this.Equipé = Equipé;
        this.Magie = Magie;
    };

    Ajouter (element){
        this.inventaire.push(element);
    };

    Retirer (element){
        for(let i = 0; i < this.inventaire.length; i++){
            if(element === this.inventaire[i]){
                this.inventaire.splice(i,1);
            };
        }
        return console.log( this.inventaire);
    }
};


console.log(Personnage);

let user = new Personnage("Marsiglia93");

console.log(user);
user.Ajouter("Epée");
user.Ajouter("Portion");
user.Ajouter("Armure");
console.log(user);
user.Retirer("Portion");
console.log(user);
