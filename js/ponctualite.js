document.addEventListener('DOMContentLoaded', function() {
    // récupère les données du fichier JSON
    fetch('data/ponctualite.json')
        .then(response => response.json())
        .then(data => {
            // extrait les années pour les utiliser comme labels 
            const labels = data.data.lignea.map(item => item.year);

            var ctx = document.getElementById('ponctualiteChart').getContext('2d');
            // définit les couleurs pour chaque ligne (couleurs officielles)
            const colors = {
                lignea: {color: 'rgba(227, 5, 28, 1)' },
                ligneb: {color: 'rgba(82, 145, 206, 1)' },
                lignec: {color: 'rgba(255, 206, 0, 1)' },
                ligned: {color: 'rgba(0, 129, 79, 1)' },
                lignee: {color: 'rgba(192, 65, 145, 1)' },
                ligneh: {color: 'rgba(141, 94, 42, 1)' },
                lignej: {color: 'rgba(213, 201, 0, 1)' },
                lignek: {color: 'rgba(159, 152, 37, 1)' },
                lignel: {color: 'rgba(206, 173, 210, 1)' },
                lignen: {color: 'rgba(0, 168, 143, 1)' },
                lignep: {color: 'rgba(242, 142, 66, 1)' },
                ligner: {color: 'rgba(243, 164, 186, 1)' },
                ligneu: {color: 'rgba(185, 8, 69, 1)' }
            };

            // crée les datasets pour chaque ligne avec les données et les couleurs correspondantes
            const datasets = Object.keys(colors).map((key, index) => ({
                label: `Ligne ${key.toUpperCase().replace('LIGNE', '')}`,
                data: data.data[key].map(item => parseFloat(item.percentage.replace(',', '.'))),
                backgroundColor: colors[key].color,
                borderColor: colors[key].color,
                borderWidth: 3,
                hidden: index !== 0 // cache toutes les lignes sauf la première (RER A) par défaut
            }));

            // crée le graphique avec chart.js
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: datasets
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 80,
                            max: 100,
                            ticks: {
                                callback: function(value) {
                                    return value + '%'; // ajoute le symbole % aux valeurs de l'axe Y
                                },
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false // cache la légende
                        }
                    },
                    elements: {
                        point: {
                            radius: 4, // taille des points
                            hoverRadius: 7 // taille des points au survol
                        }
                    }
                }
            });

            // liste des boutons pour chaque ligne
            const toggleButtons = [
                'toggleLigneA', 'toggleLigneB', 'toggleLigneC', 'toggleLigneD', 'toggleLigneE',
                'toggleLigneH', 'toggleLigneJ', 'toggleLigneK', 'toggleLigneL', 'toggleLigneN',
                'toggleLigneP', 'toggleLigneR', 'toggleLigneU'
            ];

            // détecte un clic sur chaque bouton et affiche/masque la ligne qui correspond
            toggleButtons.forEach((id, index) => {
                document.getElementById(id).addEventListener('click', function() {
                    const dataset = myChart.data.datasets[index];
                    dataset.hidden = !dataset.hidden;
                    this.style.backgroundImage = dataset.hidden 
                        ? `url('styles/images/logosLignes/${id.replace('toggle', '').toLowerCase()}LogoDead.png')` 
                        : `url('styles/images/logosLignes/${id.replace('toggle', '').toLowerCase()}Logo.png')`;
                    myChart.update();
                });
            });
            
            // bouton pour afficher/masquer toutes les lignes
            const toggleAllButton = document.getElementById('toggleGeneral');
            toggleAllButton.addEventListener('click', function() {
                const isHidden = toggleAllButton.classList.contains('hidden');
                myChart.data.datasets.forEach((dataset, index) => {
                    dataset.hidden = !isHidden;
                    document.getElementById(toggleButtons[index]).style.backgroundImage = dataset.hidden 
                        ? `url('styles/images/logosLignes/${toggleButtons[index].replace('toggle', '').toLowerCase()}LogoDead.png')` 
                        : `url('styles/images/logosLignes/${toggleButtons[index].replace('toggle', '').toLowerCase()}Logo.png')`;
                });
                toggleAllButton.classList.toggle('hidden', !isHidden);
                toggleAllButton.classList.toggle('shown', isHidden);
                myChart.update();
            });

        })
        .catch(error => console.error('Error fetching data:', error)); // renvoie une erreur si les données n'ont pas pu être récupérées
});