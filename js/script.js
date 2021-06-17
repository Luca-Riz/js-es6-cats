// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

const gatti = [
    {
        nome: 'Pallina',
        eta: 0.5,
        colore: '#bb3b3b',
        sesso: 'female'
    },
    {
        nome: 'Pallino',
        eta: 0.7,
        colore: '#ac3f3f',
        sesso: 'male'
    },
    {
        nome: 'Micio',
        eta: 0.3,
        colore: '#946a1e',
        sesso: 'male'
    },
    {
        nome: 'Micia',
        eta: 0.4,
        colore: '#bb8e3b',
        sesso: 'female'
    },
    {
        nome: 'Luna',
        eta: 0.5,
        colore: '#ac6718ee',
        sesso: 'female'
    },
    {
        nome: 'Chicco',
        eta: 0.9,
        colore: '#3d2b09',
        sesso: 'male'
    },
    {
        nome: 'Trilly',
        eta: 0.1,
        colore: '#2c2009',
        sesso: 'female'
    }
];

gatti.forEach((element) => {
    const {nome, colore} = element;
    document.getElementById('nomColGatti').innerHTML += (
        `
        ${nome} è di colore ${colore}; <br>
    
        `
    );
});

// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.



// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.
// Fate la prima Milestone da soli e poi attendete in comunicazioni l'orario del collegamento.
