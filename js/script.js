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
    },
    
];


const membersElement = document.querySelector("#members");


// ciclo ogni membro
for(let i = 0; i < teamMembers.length; i++) {

    // apro la lista in pagina
    const singleMemberElement = document.createElement("section");
    singleMemberElement.className = "member";

    // questa variabile ad ogni iterazione diventa l'oggetto attuale dell'array in cui stiamo ciclando
    const actualMember = teamMembers[i];

    
    // ciclo tutte le proprietà dell'oggetto attuale
    for(let key in actualMember) {
        // dentro il for-in
        // key ha di volta in volta il nome della chiave delle proprietà
        // del nostro oggetto

        
        // se la chiave è una foto aggiungo un elemento <img> in pagina
        if(key != "foto") {
            
            // creo l'elemento interno della lista che andrà in pagina
            const memberDetailElement = document.createElement("div");

            memberDetailElement.innerText = actualMember[key];
            
            // il mio elemento deve avere come classe la chiave della sua proprietà
            memberDetailElement.className = key;
            
            // aggiungo l'elemento creato al div del membro
            singleMemberElement.append(memberDetailElement);

        } else {

            // creare l'elemento immagine
            const listImageElement = document.createElement("img");
            // specifico il percorso relativo partendo dal file index.html
            listImageElement.src = "./img/" + actualMember.foto;
            // imposto l'attributo tag
            listImageElement.alt = "immagine di " + actualMember.nome;
            // aggiungo l'elemento creato al div del membro
            singleMemberElement.append(listImageElement);

        }


        console.log(`${key}: ${ actualMember[key] }`);

        
    }

    // console.log(singleMemberElement);
    console.log("----------------------")

    // aggiungo gli elementi alla lista
    membersElement.append(singleMemberElement);


}