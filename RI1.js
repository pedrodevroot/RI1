function criarPersonagem(nome, codinome, armaPrincipal, armaSecundaria, velocidade, forca, resistencia){
    return{
        nome : nome,
        codinome : codinome,
        armaPrincipal : armaPrincipal,
        armaSecundaria : armaSecundaria,
        velocidade : velocidade, 
        forca : forca,
        resistencia : resistencia,
        descricao : function(){
            return `
            Nome: ${this.nome}
            Codinome: ${this.codinome}
            Força: ${this.forca}
            Velocidade: ${this.velocidade}
            Resistencia: ${this.resistencia}`
        }
    }
}

const spiderManMelhorVingador = criarPersonagem( 
    "Tom Holand",
    "Spider Man Melhor Vingador",
    "Lançar teia",
    "Escalar paredes",
    100,
    100,
    100
)

const thanos = criarPersonagem(
    "Josh Brolin",
    "Thanos",
    "Manopla do Infinito",
    "",
    90,
    90,
    90
)

const hulk = criarPersonagem(
    "Mark Ruffalo",
    "Hulk",
    "Super força",
    "",
    60,
    95,
    95
)

const homemDeFerro = criarPersonagem(
    "Robert",
    "Home de Ferro",
    "Armadura Tecnologica",
    "",
    80,
    75,
    70
)

const capitaoAmerica = criarPersonagem(
    "Chris",
    "Capitão America",
    "Escudo",
    "",
    60,
    70,
    60
)

const personagens = [spiderManMelhorVingador, thanos, hulk, homemDeFerro, capitaoAmerica]

for(let i = 0; i < personagens.length; i++){
    for(let j = i + 1; j < personagens.length; j++){
            console.log("==========================")
            console.log("Descrição dos Personagens: ");
            console.log("==========================");
            console.log(personagens[i].descricao());
            console.log("--------------------------")
            console.log(personagens[j].descricao());

            console.log("Comparação:")


            //força
            if (personagens[i].forca > personagens[j].forca){
                console.log(personagens[i].codinome + " Vence em FORÇA");
            }
            else if (personagens[i].forca < personagens[j].forca){
                console.log(personagens[j].codinome + " Vence em FORÇA");
            }
            else {
                console.log("Empate de FORÇA");
            }

            //velocidade
            if (personagens[i].velocidade > personagens[j].velocidade){
                console.log(personagens[i].codinome + " Vence em VELOCIDADE")
            }
            else if (personagens[j].velocidade > personagens[i].velocidade){
                console.log(personagens[j].codinome + " Vence em VELOCIDADE")
            }
            else {
                console.log("Empate em VELOCIDADE")
            }

            //resistencia
            if (personagens[i].resistencia > personagens[j].resistencia){
                console.log(personagens[i].codinome + " Vence em RESISTENCIA")
            }
            else if (personagens[j].resistencia > personagens[i].resistencia){
                console.log(personagens[j].codinome + " Vence em RESISTENCIA")
            }
            else {
                console.log("Empate em RESISTENCIA")
            }
 
    }
}