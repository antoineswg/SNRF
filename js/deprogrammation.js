let currentIndex = 0; // index de la ligne actuellement affichée

function updateDisplayDeprog(data) {
    let ligneActiveDeprog = Object.keys(data.data)[currentIndex]; // récupère la clé de la ligne que l'on veut afficher
    let ligneDeprog = data.data[ligneActiveDeprog]; // récupère les données associées à la clé

    // met à jour l'affichage des données de déprogrammation
    for (let i = 0; i < ligneDeprog.length; i++) {

        document.querySelector(`.tableauDeprog`).innerHTML += 
        '<div class="ligneDeprog deprog'+ligneDeprog[i].year+'">'+
        '<div class="logoDeprog"><img src="styles/images/logosLignes/'+ligneActiveDeprog+'Logo.png"></div>'+
        '<div class="anneeDeprog">'+ligneDeprog[i].year+'</div>'+
        '<div class="pourcentageDeprog">'+ligneDeprog[i].percentage+' %</div>'+
        '<div class="trainsDeprog">de trains déprogrammés</div>'+    
        '</div>';
    }

    // calcule la moyenne des pourcentages de déprogrammation
    let percentages = ligneDeprog.map(item => parseInt(item.percentage, 10));
    let moyenne = percentages.reduce((a, b) => a + b, 0) / percentages.length;
    document.querySelector(`.tableauDeprog`).innerHTML += 
        '<div class="ligneDeprog deprogMoyenne">'+
        '<div class="logoDeprog"><img src="styles/images/logosLignes/'+ligneActiveDeprog+'Logo.png"></div>'+
        '<div class="anneeDeprog">Moyenne</div>'+
        '<div class="pourcentageDeprog">'+moyenne.toFixed(1)+' %</div>'+
        '<div class="trainsDeprog">de trains déprogrammés</div>'+    
        '</div>';
}

// récupère les données du fichier JSON
fetch('data/deprogrammation.json')
    .then(response => response.json())
    .then(data => {
        updateDisplayDeprog(data); // met à jour l'affichage avec les données initiales

        // détecte un clic sur le le bouton qui passe à la ligne suivante
        document.querySelector('#deprogLigneSuivante').addEventListener('click', () => {
            document.querySelector(`.tableauDeprog`).innerHTML = '';
            currentIndex += 1;
            if (currentIndex >= Object.keys(data.data).length) {
                currentIndex = 0; // revient à la première ligne si on dépasse la dernière
            }
            updateDisplayDeprog(data); // met à jour l'affichage avec la nouvelle ligne
        });

        // détecte un clic sur le le bouton qui passe à la ligne précedente
        document.querySelector('#deprogLignePrecedente').addEventListener('click', () => {
            document.querySelector(`.tableauDeprog`).innerHTML = '';
            currentIndex -= 1;
            if (currentIndex < 0) {
                currentIndex = Object.keys(data.data).length - 1; // revient à la dernière ligne si on dépasse la première
            }
            updateDisplayDeprog(data); // met à jour l'affichage avec la nouvelle ligne
        });
    })
    .catch(error => console.error('Error fetching data:', error)); // renvoie une erreur si les données n'ont pas pu être récupérées