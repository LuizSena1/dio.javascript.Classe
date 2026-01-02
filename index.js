const readline = require('readline');
const {stdin: input, stdout: output} = require('node:process');
const rl = readline.createInterface({input,output});

class Hero {
    constructor(name,age,type) {
        this.name = name
        this.age = age
        this.type = type
    }
    attack(){
        console.log(`O ${this.type.name} atacou usando ${this.type.attack}`)
    }
}

function Question(info){
    return new Promise(resolve =>{
        rl.question(info,resolve);
    });
}



async function runcode() {
    const name = await(Question('Informe seu nome: '));
    const age = Number(await(Question('Informe sua idade: ')));
    let type = null;
    while (!type){
        const clase = await(Question)('Qual sua Classe?: Guerreiro, Mago, Monge ou Ninja?: ')
        Mclase = clase.toUpperCase();
        switch (Mclase) {
            case "GUERREIRO":      
                type = {
                    name: "Guerreiro",
                    attack: "espada"
                };  
                break;
            case "MAGO":             
                    type = {
                    name: "Mago",
                    attack: "magia"
                };   
                break;
            case "MONGE":
                    type = {
                    name: "Monge",
                    attack: "artes marciais"
                };                 
                break;
            case "NINJA":
                    type = {
                    name: "Ninja",
                    attack: "shuriken"
                };                 
                break;
            default:
                console.log('Escolha uma das classes disponiveis\n');
        }
        
    };
    let heroi = new Hero(name,age,type)
    heroi.attack();
    rl.close();   
}
runcode();