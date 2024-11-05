document.addEventListener('DOMContentLoaded', function() {
    fetch('dataponctualite.json')
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



            var ctx = document.getElementById('testChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Ligne A',
                            data: percentageDataLigneA,
                            backgroundColor: 'rgba(227, 5, 28, 0.3)',
                            borderColor: 'rgba(227, 5, 28, 1)',
                            borderWidth: 3,
                            hidden: false 
                        },
                        {
                            label: 'Ligne B',
                            data: percentageDataLigneB,
                            backgroundColor: 'rgba(82, 145, 206, 0.3)',
                            borderColor: 'rgba(82, 145, 206, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'Ligne C',
                            data: percentageDataLigneC,
                            backgroundColor: 'rgba(255, 206, 0, 0.3)',
                            borderColor: 'rgba(255, 206, 0, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'Ligne D',
                            data: percentageDataLigneD,
                            backgroundColor: 'rgba(0, 129, 79, 0.3)',
                            borderColor: 'rgba(0, 129, 79, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'Ligne E',
                            data: percentageDataLigneE,
                            backgroundColor: 'rgba(192, 65, 145, 0.3)',
                            borderColor: 'rgba(192, 65, 145, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'Ligne H',
                            data: percentageDataLigneH,
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            borderColor: 'rgba(0, 0, 0, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'Ligne J',
                            data: percentageDataLigneJ,
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            borderColor: 'rgba(0, 0, 0, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'Ligne K',
                            data: percentageDataLigneK,
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            borderColor: 'rgba(0, 0, 0, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'Ligne N',
                            data: percentageDataLigneN,
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            borderColor: 'rgba(0, 0, 0, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'Ligne P',
                            data: percentageDataLigneP,
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            borderColor: 'rgba(0, 0, 0, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'Ligne R',
                            data: percentageDataLigneR,
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            borderColor: 'rgba(0, 0, 0, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'Ligne U',
                            data: percentageDataLigneU,
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            borderColor: 'rgba(0, 0, 0, 1)',
                            borderWidth: 3,
                            hidden: true 
                        },
                        {
                            label: 'Ligne L',
                            data: percentageDataLigneL,
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            borderColor: 'rgba(0, 0, 0, 1)',
                            borderWidth: 3,
                            hidden: true 
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 75,
                            max: 100,
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                },
                            }
                        }
                    }
                }
            });

            document.getElementById('toggleLigneA').addEventListener('click', function() {
                myChart.data.datasets[0].hidden = !myChart.data.datasets[0].hidden;
                myChart.update();
            });

            document.getElementById('toggleLigneB').addEventListener('click', function() {
                myChart.data.datasets[1].hidden = !myChart.data.datasets[1].hidden;
                myChart.update();
            });

            document.getElementById('toggleLigneC').addEventListener('click', function() {
                myChart.data.datasets[2].hidden = !myChart.data.datasets[2].hidden;
                myChart.update();
            });

            document.getElementById('toggleLigneD').addEventListener('click', function() {
                myChart.data.datasets[3].hidden = !myChart.data.datasets[3].hidden;
                myChart.update();
            });

            document.getElementById('toggleLigneE').addEventListener('click', function() {
                myChart.data.datasets[4].hidden = !myChart.data.datasets[4].hidden;
                myChart.update();
            });
            
            document.getElementById('toggleLigneH').addEventListener('click', function() {
                myChart.data.datasets[5].hidden = !myChart.data.datasets[5].hidden;
                myChart.update();
            });
            
            document.getElementById('toggleLigneK').addEventListener('click', function() {
                myChart.data.datasets[6].hidden = !myChart.data.datasets[6].hidden;
                myChart.update();
            });
            
            document.getElementById('toggleLigneE').addEventListener('click', function() {
                myChart.data.datasets[7].hidden = !myChart.data.datasets[7].hidden;
                myChart.update();
            });
            
            document.getElementById('toggleLigneE').addEventListener('click', function() {
                myChart.data.datasets[8].hidden = !myChart.data.datasets[8].hidden;
                myChart.update();
            });
            
            document.getElementById('toggleLigneE').addEventListener('click', function() {
                myChart.data.datasets[9].hidden = !myChart.data.datasets[9].hidden;
                myChart.update();
            });
            
            document.getElementById('toggleLigneE').addEventListener('click', function() {
                myChart.data.datasets[10].hidden = !myChart.data.datasets[10].hidden;
                myChart.update();
            });
            
            document.getElementById('toggleLigneE').addEventListener('click', function() {
                myChart.data.datasets[11].hidden = !myChart.data.datasets[11].hidden;
                myChart.update();
            });
            
            document.getElementById('toggleLigneE').addEventListener('click', function() {
                myChart.data.datasets[12].hidden = !myChart.data.datasets[12].hidden;
                myChart.update();
            });

        })
        .catch(error => console.error('Error fetching data:', error));
});
