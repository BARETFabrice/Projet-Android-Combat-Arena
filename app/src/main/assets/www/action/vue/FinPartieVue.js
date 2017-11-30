const FinPartieVue = function()
{
    function initialiser()
    {
        document.querySelector("body").innerHTML = Page.pageFinPartie;
        var randomScalingFactor = function() {
			return Math.round(Math.random() * 15);
		};

		var config = {
			type: 'pie',
			data: {
				datasets: [{
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
					],
					backgroundColor: [
						'rgb(255, 99, 132)',
						'rgb(255, 159, 64)',
						'rgb(255, 205, 86)',
						'rgb(75, 192, 192)',
						'rgb(54, 162, 235)',
					],
					label: 'Nombre de frag'
				}],
				labels: [
					"Fred",
					"Alex",
					"Fabrice",
					"Sebastien",
					"Bob"
				]
			},
			options: {
				responsive: true
			}
		};

		var ctx = document.getElementById("chart-area").getContext("2d");
		window.myPie = new Chart(ctx, config);
		
    }
    
    initialiser();
    
    
};