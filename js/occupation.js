let currentIndexOccupation = 0; // index de la ligne actuellement affichée

function updateDisplayOccupation(data) {
    let ligneActiveOccupation = Object.keys(data.data)[currentIndexOccupation]; // récupère la clé de la ligne que l'on veut afficher
    let ligneOccupation = data.data[ligneActiveOccupation]; // récupère les données associées à la clé

    // met à jour l'affichage des données d'occupation
    for (let i = 0; i < ligneOccupation.length; i++) {
        categorieOccupation = 'Maximale';
        imgOccupation = 'maximale';

        if (ligneOccupation[i].percentage < 80) {
            categorieOccupation = 'Très élevé';
            imgOccupation = 'tres_eleve';
        }

        if (ligneOccupation[i].percentage < 60) {
            categorieOccupation = 'Élevé';
            imgOccupation = 'eleve';
        }

        if (ligneOccupation[i].percentage < 40) {
            categorieOccupation = 'Moyen';
            imgOccupation = 'moyen';
        }

        if (ligneOccupation[i].percentage < 20) {
            categorieOccupation = 'Faible';
            imgOccupation = 'faible';
        }

        nomLigneActive = "ligne " + ligneActiveOccupation.replace('ligne', '');

        document.querySelector(`.tableauOccupation`).innerHTML += 
        '<div class="ligneOccupation occupation'+ligneOccupation[i].year+'">'+
        '<div class="logoOccupation"><img src="styles/images/logosLignes/'+ligneActiveOccupation+'Logo.png" alt="Logo de la '+nomLigneActive+'"></div>'+
        '<div class="anneeOccupation">'+ligneOccupation[i].year+'</div>'+
        '<div class="categorieOccupation"><span class="separationOccupation">-</span> ' + categorieOccupation + '</div> '+
        '<div class="imgOccupation"><img src="styles/images/nivOcccupation/'+ imgOccupation +'.png" alt=""></div>'+
        '<div class="pourcentageOccupation">'+ligneOccupation[i].percentage+'%</div>'+    
        '</div>';
    }
}

// récupère les données du fichier JSON
fetch('data/occupation.json')
    .then(response => response.json())
    .then(data => {
        updateDisplayOccupation(data); // met à jour l'affichage avec les données initiales

        // détecte un clic sur le bouton qui passe à la ligne suivante
        document.querySelector('#occupationLigneSuivante').addEventListener('click', () => {
            document.querySelector(`.tableauOccupation`).innerHTML = '';
            currentIndexOccupation += 1;
            if (currentIndexOccupation >= Object.keys(data.data).length) {
                currentIndexOccupation = 0; // revient à la première ligne si on dépasse la dernière
            }
            updateDisplayOccupation(data); // met à jour l'affichage avec la nouvelle ligne
        });

        // détecte un clic sur le bouton qui passe à la ligne précédente
        document.querySelector('#occupationLignePrecedente').addEventListener('click', () => {
            document.querySelector(`.tableauOccupation`).innerHTML = '';
            currentIndexOccupation -= 1;
            if (currentIndexOccupation < 0) {
                currentIndexOccupation = Object.keys(data.data).length - 1; // revient à la dernière ligne si on dépasse la première
            }
            updateDisplayOccupation(data); // met à jour l'affichage avec la nouvelle ligne
        });
    })
    .catch(error => console.error('Error fetching data:', error)); // renvoie une erreur si les données n'ont pas pu être récupérées