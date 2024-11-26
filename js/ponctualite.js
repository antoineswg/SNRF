document.addEventListener('DOMContentLoaded', function() {
    fetch('data/ponctualite.json')
        .then(response => response.json())
        .then(data => {
            const labels = data.data.lignea.map(item => item.year);

            var ctx = document.getElementById('ponctualiteChart').getContext('2d');
            const colors = {
                lignea: { bg: 'rgba(227, 5, 28, 0.3)', border: 'rgba(227, 5, 28, 1)' },
                ligneb: { bg: 'rgba(82, 145, 206, 0.3)', border: 'rgba(82, 145, 206, 1)' },
                lignec: { bg: 'rgba(255, 206, 0, 0.3)', border: 'rgba(255, 206, 0, 1)' },
                ligned: { bg: 'rgba(0, 129, 79, 0.3)', border: 'rgba(0, 129, 79, 1)' },
                lignee: { bg: 'rgba(192, 65, 145, 0.3)', border: 'rgba(192, 65, 145, 1)' },
                ligneh: { bg: 'rgba(141, 94, 42, 0.3)', border: 'rgba(141, 94, 42, 1)' },
                lignej: { bg: 'rgba(213, 201, 0, 0.3)', border: 'rgba(213, 201, 0, 1)' },
                lignek: { bg: 'rgba(159, 152, 37, 0.3)', border: 'rgba(159, 152, 37, 1)' },
                lignel: { bg: 'rgba(206, 173, 210, 0.3)', border: 'rgba(206, 173, 210, 1)' },
                lignen: { bg: 'rgba(0, 168, 143, 0.3)', border: 'rgba(0, 168, 143, 1)' },
                lignep: { bg: 'rgba(242, 142, 66, 0.3)', border: 'rgba(242, 142, 66, 1)' },
                ligner: { bg: 'rgba(243, 164, 186, 0.3)', border: 'rgba(243, 164, 186, 1)' },
                ligneu: { bg: 'rgba(185, 8, 69, 0.3)', border: 'rgba(185, 8, 69, 1)' }
            };

            const datasets = Object.keys(colors).map((key, index) => ({
                label: `Ligne ${key.toUpperCase().replace('LIGNE', '')}`,
                data: data.data[key].map(item => parseFloat(item.percentage.replace(',', '.'))),
                backgroundColor: colors[key].bg,
                borderColor: colors[key].border,
                borderWidth: 3,
                hidden: index !== 0
            }));

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
                                    return value + '%';
                                },
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });

            const toggleButtons = [
                'toggleLigneA', 'toggleLigneB', 'toggleLigneC', 'toggleLigneD', 'toggleLigneE',
                'toggleLigneH', 'toggleLigneJ', 'toggleLigneK', 'toggleLigneL', 'toggleLigneN',
                'toggleLigneP', 'toggleLigneR', 'toggleLigneU'
            ];

            toggleButtons.forEach((id, index) => {
                document.getElementById(id).addEventListener('click', function() {
                    myChart.data.datasets[index].hidden = !myChart.data.datasets[index].hidden;
                    myChart.update();
                });
            });
            

            const toggleAllButton = document.getElementById('toggleGeneral');
            toggleAllButton.addEventListener('click', function() {
                const isHidden = toggleAllButton.classList.contains('hidden');
                myChart.data.datasets.forEach(dataset => {
                    dataset.hidden = !isHidden;
                });
                toggleAllButton.classList.toggle('hidden', !isHidden);
                toggleAllButton.classList.toggle('shown', isHidden);
                myChart.update();
            });

        })
        .catch(error => console.error('Error fetching data:', error));
});