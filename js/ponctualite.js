document.addEventListener('DOMContentLoaded', function() {
    fetch('data/ponctualite.json')
        .then(response => response.json())
        .then(data => {
            const labels = data.data.lignea.map(item => item.year);
            const percentageDataLigneA = data.data.lignea.map(item => parseFloat(item.percentage.replace(',', '.')));
            const percentageDataLigneB = data.data.ligneb.map(item => parseFloat(item.percentage.replace(',', '.')));
            const percentageDataLigneC = data.data.lignec.map(item => parseFloat(item.percentage.replace(',', '.')));
            const percentageDataLigneD = data.data.ligned.map(item => parseFloat(item.percentage.replace(',', '.')));
            const percentageDataLigneE = data.data.lignee.map(item => parseFloat(item.percentage.replace(',', '.')));
            const percentageDataLigneH = data.data.ligneh.map(item => parseFloat(item.percentage.replace(',', '.')));
            const percentageDataLigneJ = data.data.lignej.map(item => parseFloat(item.percentage.replace(',', '.')));
            const percentageDataLigneK = data.data.lignek.map(item => parseFloat(item.percentage.replace(',', '.')));
            const percentageDataLigneN = data.data.lignen.map(item => parseFloat(item.percentage.replace(',', '.')));
            const percentageDataLigneP = data.data.lignep.map(item => parseFloat(item.percentage.replace(',', '.')));
            const percentageDataLigneR = data.data.ligner.map(item => parseFloat(item.percentage.replace(',', '.')));
            const percentageDataLigneU = data.data.ligneu.map(item => parseFloat(item.percentage.replace(',', '.')));
            const percentageDataLigneL = data.data.lignel.map(item => parseFloat(item.percentage.replace(',', '.')));

            var ctx = document.getElementById('ponctualiteChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'RER A',
                            data: percentageDataLigneA,
                            backgroundColor: 'rgba(227, 5, 28, 0.3)',
                            borderColor: 'rgba(227, 5, 28, 1)',
                            borderWidth: 3,
                            hidden: false 
                        },
                        {
                            label: 'RER B',
                            data: percentageDataLigneB,
                            backgroundColor: 'rgba(82, 145, 206, 0.3)',
                            borderColor: 'rgba(82, 145, 206, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'RER C',
                            data: percentageDataLigneC,
                            backgroundColor: 'rgba(255, 206, 0, 0.3)',
                            borderColor: 'rgba(255, 206, 0, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'RER D',
                            data: percentageDataLigneD,
                            backgroundColor: 'rgba(0, 129, 79, 0.3)',
                            borderColor: 'rgba(0, 129, 79, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'RER E',
                            data: percentageDataLigneE,
                            backgroundColor: 'rgba(192, 65, 145, 0.3)',
                            borderColor: 'rgba(192, 65, 145, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'Transilien H',
                            data: percentageDataLigneH,
                            backgroundColor: 'rgba(141, 94, 42, 0.3)',
                            borderColor: 'rgba(141, 94, 42, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'Transilien J',
                            data: percentageDataLigneJ,
                            backgroundColor: 'rgba(213, 201, 0, 0.3)',
                            borderColor: 'rgba(213, 201, 0, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'Transilien K',
                            data: percentageDataLigneK,
                            backgroundColor: 'rgba(159, 152, 37, 0.3)',
                            borderColor: 'rgba(159, 152, 37, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'Transilien L',
                            data: percentageDataLigneL,
                            backgroundColor: 'rgba(206, 173, 210, 0.3)',
                            borderColor: 'rgba(206, 173, 210, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'Transilien N',
                            data: percentageDataLigneN,
                            backgroundColor: 'rgba(0, 168, 143, 0.3)',
                            borderColor: 'rgba(0, 168, 143, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'Transilien P',
                            data: percentageDataLigneP,
                            backgroundColor: 'rgba(242, 142, 66, 0.3)',
                            borderColor: 'rgba(242, 142, 66, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'Transilien R',
                            data: percentageDataLigneR,
                            backgroundColor: 'rgba(243, 164, 186, 0.3)',
                            borderColor: 'rgba(243, 164, 186, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'Transilien U',
                            data: percentageDataLigneU,
                            backgroundColor: 'rgba(185, 8, 69, 0.3)',
                            borderColor: 'rgba(185, 8, 69, 1)',
                            borderWidth: 3,
                            hidden: true 
                        }
                    ]
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