let currentIndex = 0; // index de la ligne actuellement affichée

function updateDisplay(data) {
    let ligneActive = Object.keys(data.data)[currentIndex]; // récupère la clé de la ligne que l'on veut afficher
    let ligne = data.data[ligneActive]; // récupère les données associées à la clé

    // met à jour l'affichage des données de déprogrammation
    for (let i = 0; i < 4; i++) {
        document.querySelector(`.deprog202${i} .anneeDeprog`).innerHTML = ligne[i].year;
        document.querySelector(`.deprog202${i} .pourcentageDeprog`).innerHTML = ligne[i].percentage + '%';
        document.querySelector(`.deprog202${i} .logoDeprog`).innerHTML = `<img src="styles/images/logosLignes/${ligneActive}Logo.png" alt=""></img>`;
    }

    // calcule la moyenne des pourcentages de déprogrammation
    let percentages = ligne.map(item => parseInt(item.percentage, 10));
    let moyenne = percentages.reduce((a, b) => a + b, 0) / percentages.length;
    document.querySelector('.deprogMoyenne .anneeDeprog').innerHTML = 'Moyenne';
    document.querySelector('.deprogMoyenne .pourcentageDeprog').innerHTML = moyenne.toFixed(1) + '%';
    document.querySelector('.deprogMoyenne .logoDeprog').innerHTML = `<img src="styles/images/logosLignes/${ligneActive}Logo.png" alt=""></img>`;
}

// récupère les données du fichier JSON
fetch('data/deprogrammation.json')
    .then(response => response.json())
    .then(data => {
        updateDisplay(data); // met à jour l'affichage avec les données initiales

        // détecte un clic sur le le bouton qui passe à la ligne suivante
        document.querySelector('#deprogLigneSuivante').addEventListener('click', () => {
            currentIndex += 1;
            if (currentIndex >= Object.keys(data.data).length) {
                currentIndex = 0; // revient à la première ligne si on dépasse la dernière
            }
            updateDisplay(data); // met à jour l'affichage avec la nouvelle ligne
        });

        // détecte un clic sur le le bouton qui passe à la ligne précedente
        document.querySelector('#deprogLignePrecedente').addEventListener('click', () => {
            currentIndex -= 1;
            if (currentIndex < 0) {
                currentIndex = Object.keys(data.data).length - 1; // revient à la dernière ligne si on dépasse la première
            }
            updateDisplay(data); // met à jour l'affichage avec la nouvelle ligne
        });
    })
    .catch(error => console.error('Error fetching data:', error)); // renvoie une erreur si les données n'ont pas pu être récupérées