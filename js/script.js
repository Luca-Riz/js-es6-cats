// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

const gatti = [
    {
        nome: 'Pallina',
        eta: 0.5,
        color: '#bb3b3b',
        sesso: 'female'
    },
    {
        nome: 'Pallino',
        eta: 0.7,
        color: '#ac3f3f',
        sesso: 'male'
    },
    {
        nome: 'Micio',
        eta: 0.3,
        color: '#946a1e',
        sesso: 'male'
    },
    {
        nome: 'Micia',
        eta: 0.4,
        color: '#bb8e3b',
        sesso: 'female'
    },
    {
        nome: 'Luna',
        eta: 0.5,
        color: '#ac6718ee',
        sesso: 'female'
    },
    {
        nome: 'Chicco',
        eta: 0.9,
        color: '#3d2b09',
        sesso: 'male'
    },
    {
        nome: 'Trilly',
        eta: 0.1,
        color: '#2c2009',
        sesso: 'female'
    }
];

gatti.forEach((element) => {
    const {nome, color} = element;
    document.getElementById('nomColGatti').innerHTML += (
        `
        <i class="fas fa-cat" style="color:${color};"></i> ${nome} è di colore ${color} <br>    
        `
    );
});

// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.



// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.
// Fate la prima Milestone da soli e poi attendete in comunicazioni l'orario del collegamento.


