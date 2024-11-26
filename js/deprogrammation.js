let currentIndex = 0;

function updateDisplay(data) {
    let ligneActive = Object.keys(data.data)[currentIndex];
    let ligne = data.data[ligneActive];

    for (let i = 0; i < 4; i++) {
        document.querySelector(`.deprog202${i} .anneeDeprog`).innerHTML = ligne[i].year;
        document.querySelector(`.deprog202${i} .pourcentageDeprog`).innerHTML = ligne[i].percentage + '%';
        document.querySelector(`.deprog202${i} .logoDeprog`).innerHTML = `<img src="styles/images/logosLignes/${ligneActive}Logo.png" alt=""></img>`;
    }

    let percentages = ligne.map(item => parseInt(item.percentage, 10));
    let moyenne = percentages.reduce((a, b) => a + b, 0) / percentages.length;
    document.querySelector('.deprogMoyenne .anneeDeprog').innerHTML = 'Moyenne';
    document.querySelector('.deprogMoyenne .pourcentageDeprog').innerHTML = moyenne.toFixed(1) + '%';
    document.querySelector('.deprogMoyenne .logoDeprog').innerHTML = `<img src="styles/images/logosLignes/${ligneActive}Logo.png" alt=""></img>`;
}

fetch('data/deprogrammation.json')
    .then(response => response.json())
    .then(data => {
        
        updateDisplay(data);
        document.querySelector('#deprogLigneSuivante').addEventListener('click', () => {
            currentIndex += 1;
            if (currentIndex >= Object.keys(data.data).length) {
                currentIndex = 0;
            }
            updateDisplay(data);});

            document.querySelector('#deprogLignePrecedente').addEventListener('click', () => {
                currentIndex -= 1;
                if (currentIndex < 0) {
                    currentIndex = Object.keys(data.data).length - 1;
                }
                updateDisplay(data);});
        
    })
    .catch(error => console.error('Error fetching data:', error));