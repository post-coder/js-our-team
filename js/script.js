/*

Utilizzando i dati forniti, creare un array di oggetti 
per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: 
nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, 
le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

*/


const teamMembers = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        nome: 'Angela Carol',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    
    {
        nome: 'Scot Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
];


const membersElement = document.querySelector("#members");


// ciclo ogni membro
for(let i = 0; i < teamMembers.length; i++) {

    // apro la lista in pagina
    const listElement = document.createElement("ul");

    // questa variabile ad ogni iterazione diventa l'oggetto attuale dell'array in cui stiamo ciclando
    const actualMember = teamMembers[i]

    
    // ciclo tutte le proprietà dell'oggetto attuale
    for(let key in actualMember) {

        // creo l'elemento interno della lista che andrà in pagina
        const listItemElement = document.createElement("li");

        // se la chiave è una foto aggiungo un elemento <img> in pagina
        if(key != "foto") {
            
            listItemElement.innerText = `${key}: ${ actualMember[key] }`;
            
        } else {

            // creare l'elemento immagine
            const listImageElement = document.createElement("img");
            listImageElement.src = "./img/" + actualMember.foto;
            listImageElement.alt = "immagine membro";
            listItemElement.append(listImageElement);
            

        }

        listElement.append(listItemElement);

        console.log(`${key}: ${ actualMember[key] }`);

        
    }

    // console.log(listElement);
    console.log("----------------------")

    // aggiungo gli elementi alla lista
    membersElement.append(listElement);


}