// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

document.getElementById('container').innerHTML += '--Milestone 1--<br>';

const gatti = [
    {nome: 'Pallina', eta: 2.5, color: '#bb3b3b', sesso: 'female'},
    {nome: 'Pallino', eta: 1.7, color: '#ac3f3f', sesso: 'male'},
    {nome: 'Micio', eta: 3.3, color: '#946a1e', sesso: 'male'},
    {nome: 'Micia', eta: 4, color: '#bb8e3b', sesso: 'female'},
    {nome: 'Luna', eta: 5, color: '#ac6718ee',  sesso: 'female'},
    {nome: 'Chicco', eta: 2.9, color: '#3d2b09', sesso: 'male'},
    {nome: 'Trilly', eta: 3.1, color: '#2c2009', sesso: 'female'}
];

gatti.forEach((element) => {
    const {nome, color} = element;
    document.getElementById('container').innerHTML += (
        `
        <i class="fas fa-cat" style="color:${color};"></i> ${nome} <br>    
        `
    );
});

// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

document.getElementById('container').innerHTML += '<br>--Milestone 2--<br>'

//Dare fiocco per colore e genere
const pink = '#e7120f';
const blue = '#211cbb';

const newCats = gatti.map((element) => {
    const {nome,eta,color,sesso} = element;
    const opacity=element.eta / 5;

    return {
        nome,                                                                  
        eta,
        color,
        sesso,
        ribbon : {
            color : (sesso == 'female') ? pink : blue,
            opacity : opacity
        }
    }
});


const printCatsRibbon = (array) => {
    array.forEach((element) => {
        document.getElementById('container').innerHTML += 
        `
        <i class="fas fa-cat" style="color:${element.color};"></i> ${element.nome} :  <i class="fas fa-ribbon" style="color:${element.ribbon.color}; opacity:${element.ribbon.opacity};"></i><br>
        `;
    });
}


//Filtrare gatti per dividere maschi da femmine
//male
const maleCats = newCats.filter((element) => element.sesso == 'male');
printCatsRibbon(maleCats,'container');

//female
const femaleCats = newCats.filter((element) => element.sesso == 'female');
printCatsRibbon(femaleCats,'container');


// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.
// Fate la prima Milestone da soli e poi attendete in comunicazioni l'orario del collegamento.

document.getElementById('container').innerHTML += '<br>--Milestone 3--<br>'

let catsFemaleMale = [...femaleCats,...maleCats];

const catsFemaleMaleZip = catsFemaleMale.map((element) => {
    const {nome, color, ribbon} = element;

    return {
        nome,
        color,
        ribbon
    }
});

printCatsRibbon(catsFemaleMaleZip);


