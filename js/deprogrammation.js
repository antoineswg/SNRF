let currentIndex = 0;

function updateDisplay(data) {
    let ligneActive = Object.keys(data.data)[currentIndex];
    let ligne = data.data[ligneActive];

    document.querySelector('.deprog2020 .anneeDeprog').innerHTML = ligne[0].year;
    document.querySelector('.deprog2020 .pourcentageDeprog').innerHTML = ligne[0].percentage + '%';
    document.querySelector('.deprog2020 .logoDeprog').innerHTML = '<img src="styles/images/logosLignes/' + ligneActive + 'Logo.png" alt=""></img>';

    document.querySelector('.deprog2021 .anneeDeprog').innerHTML = ligne[1].year;
    document.querySelector('.deprog2021 .pourcentageDeprog').innerHTML = ligne[1].percentage + '%';
    document.querySelector('.deprog2021 .logoDeprog').innerHTML = '<img src="styles/images/logosLignes/' + ligneActive + 'Logo.png" alt=""></img>';

    document.querySelector('.deprog2022 .anneeDeprog').innerHTML = ligne[2].year;
    document.querySelector('.deprog2022 .pourcentageDeprog').innerHTML = ligne[2].percentage + '%';
    document.querySelector('.deprog2022 .logoDeprog').innerHTML = '<img src="styles/images/logosLignes/' + ligneActive + 'Logo.png" alt=""></img>';

    document.querySelector('.deprog2023 .anneeDeprog').innerHTML = ligne[3].year;
    document.querySelector('.deprog2023 .pourcentageDeprog').innerHTML = ligne[3].percentage + '%';
    document.querySelector('.deprog2023 .logoDeprog').innerHTML = '<img src="styles/images/logosLignes/' + ligneActive + 'Logo.png" alt=""></img>';

    let percentages = ligne.map(item => parseInt(item.percentage, 10));
    let moyenne = (percentages[0] + percentages[1] + percentages[2] + percentages[3]) / 4;
    document.querySelector('.deprogMoyenne .anneeDeprog').innerHTML = 'Moyenne';
    document.querySelector('.deprogMoyenne .pourcentageDeprog').innerHTML = moyenne.toFixed(1) + '%';
    document.querySelector('.deprogMoyenne .logoDeprog').innerHTML = '<img src="styles/images/logosLignes/' + ligneActive + 'Logo.png" alt=""></img>';

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