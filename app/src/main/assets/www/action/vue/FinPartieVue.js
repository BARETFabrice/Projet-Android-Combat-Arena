const FinPartieVue ={
	initialiser:function(dernierePartie)
    {
		if(!dernierePartie.error) //CREER LE GRAPH ICI SI IL A DEJA JOUER UNE PARTIE
		{
			alert("Ce n'est PAS votre premiere partie!");
		}
		else //CRÉER ICI SI C'EST ÇA PREMIERE PARTIE
		{
			
		}
        document.querySelector("body").innerHTML = Page.pageFinPartie;
		
		
        var color = Chart.helpers.color;
        var barChartData = {
            labels: ["Nombre de chutes", "Duree", "Ratio de victoire"],
            datasets: [{
                label: 'Cette partie',
                backgroundColor: color('rgb(255, 99, 132)').alpha(0.5).rgbString(),
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 1,
                data: [
                    1*100,
					0.8*100,
					0*100
                ]
            }, {
                label: 'Derniere Partie',
                backgroundColor: color('rgb(255, 159, 64)').alpha(0.5).rgbString(),
                borderColor: 'rgb(255, 159, 64)',
                borderWidth: 1,
                data: [
                    0.5*100,
					1*100,
					1*100
                ]
            }, {
                label: 'Moyenne globale',
                backgroundColor: color('rgb(255, 205, 86)').alpha(0.5).rgbString(),
                borderColor: 'rgb(255, 205, 86)',
                borderWidth: 1,
                data: [
                    0.7*100,
					0.75*100,
					0.4*100
                ]
            }]

        };

            var ctx = document.getElementById("chart-area").getContext("2d");
            window.myBar = new Chart(ctx, {
                type: 'bar',
                data: barChartData,
                options: {
                    responsive: true,
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Statistiques'
                    }
                }
            });
    }
};