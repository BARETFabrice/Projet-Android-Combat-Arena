const FinPartieVue ={
	
	initialiser:function()
    {
        document.querySelector("body").innerHTML = Page.pageFinPartie;
		
		this.dernierePartie=null;
		this.moyenne=null;
    },
	
	recevoirDernierePartie:function(dernierePartie){
		
		this.dernierePartie={chutes: (Number(dernierePartie.nombreDeChutes)||0), duree: (Number(dernierePartie.dureePartie)||0), victoire: (Number(dernierePartie.victoire)||0)};
		FinPartieVue.dessinerGraph();
	},
	
	recevoirMoyenne:function(moyenne){
		this.moyenne={chutes: (Number(moyenne.chutes)||0), duree: (Number(moyenne.duree)||0), victoire: (Number(moyenne.ratio)||0)};
		FinPartieVue.dessinerGraph();
	},
	
	dessinerGraph:function(){
			
		if(/*this.partie && */this.dernierePartie && this.moyenne && (new RegExp(/^#fin-partie/).test(window.location.hash)));
		else return;
		
		var victoire={
			//partie:this.partie.victoire,
			dernierePartie:this.dernierePartie.victoire,
			moyenne:this.moyenne.victoire
		}
		
		var chutes={
			//partie:(this.partie.chutes || 0)/chutesMax,
			dernierePartie:(this.dernierePartie.chutes || 0)/chutesMax,
			moyenne:(this.moyenne.chutes || 0)/chutesMax
		}
		
		var dureeMax=1;
		
		if(this.dernierePartie.duree>dureeMax)
			dureeMax=this.dernierePartie.duree;
		if(this.moyenne.duree>dureeMax)
			dureeMax=this.moyenne.duree;
		//if(this.partie.duree && this.partie.duree>dureeMax)
			//dureeMax=this.partie.duree;
		
		var durees={
			//partie:this.partie.duree/dureeMax,
			dernierePartie:this.dernierePartie.duree/dureeMax,
			moyenne:this.moyenne.duree/dureeMax
		}
		
		var chutesMax=1;
		
		if(this.dernierePartie.chutes>chutesMax)
			chutesMax=this.dernierePartie.chutes;
		if(this.moyenne.chutes && this.moyenne.chutes>chutesMax)
			chutesMax=this.moyenne.chutes;
		//if(this.partie.chutes && this.partie.chutes>chutesMax)
			//chutesMax=this.partie.chutes;
		
		var chutes={
			//partie:this.partie.chutes/chutesMax,
			dernierePartie:this.dernierePartie.chutes/chutesMax,
			moyenne:this.moyenne.chutes/chutesMax
		}
		
		var color = Chart.helpers.color;
		
        var barChartData = {
            labels: ["Nombre de chutes", "Duree", "Ratio de victoire"],
            datasets: [/*{
                label: 'Cette partie',
                backgroundColor: color('rgb(255, 99, 132)').alpha(0.5).rgbString(),
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 1,
                data: [
                    chutes.partie*100,
					durees.partie*100,
					victoire.partie*100
                ]
            }, */{
                label: 'Derniere Partie',
                backgroundColor: color('rgb(255, 159, 64)').alpha(0.5).rgbString(),
                borderColor: 'rgb(255, 159, 64)',
                borderWidth: 1,
                data: [
                    chutes.dernierePartie*100,
					durees.dernierePartie*100,
					victoire.dernierePartie*100
                ]
            }, {
                label: 'Moyenne globale',
                backgroundColor: color('rgb(255, 205, 86)').alpha(0.5).rgbString(),
                borderColor: 'rgb(255, 205, 86)',
                borderWidth: 1,
                data: [
                    chutes.moyenne*100,
					durees.moyenne*100,
					victoire.moyenne*100
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
					text: 'Statistiques (%)'
				}
			}
		});
		
		this.dernierePartie=null;
		this.moyenne=null;
	}
};