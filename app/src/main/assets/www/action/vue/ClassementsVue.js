const ClassementsVue={
	
    initialiser:function()
    {
        document.body.innerHTML = Page.pageClassements;
    },
	
	classementMorts:function(objet){
		if(!new RegExp(/^#classements\/chutes/).test(window.location.hash)) return;
		
		ClassementsVue.initialiser();
		
		var string="";
		
		for(var i in objet){
			var r=objet[i];
			if(r.nombreChutes == 0 || r.nombreChutes == 1)
				string+="<li>"+r.nom + ": " + r.nombreChutes + " chute</li>";
			else
				string+="<li>"+r.nom + ": " + r.nombreChutes + " chutes</li>";
		}
		
		document.getElementById("liste-classement").innerHTML+=string;
	},
	
	classementVictoires:function(objet){
		if(!new RegExp(/^#classements\/victoires/).test(window.location.hash)) return;
		
		ClassementsVue.initialiser();
		
		var string="";
		
		for(var i in objet){
			var r=objet[i];
			if(r.victoires == 0 || r.victoires == 1)
				string+="<li>"+r.nom + ": " + r.victoires + " victoire</li>";
			else
				string+="<li>"+r.nom + ": " + r.victoires + " victoires</li>";
		}
		
		document.getElementById("liste-classement").innerHTML+=string;
	},
	
	classementTemps:function(objet){
		if(!new RegExp(/^#classements\/temps/).test(window.location.hash)) return;
		
		ClassementsVue.initialiser();
		
		var string="";
		
		for(var i in objet){
			var r=objet[i];
			
			var ms = r.duree;
			
			var sec = Math.floor(ms/1000);
			ms-=sec*1000;
			
			var min = Math.floor(sec/60);
			sec-=min*60;
			
			var hr = Math.floor(min/60);
			min-=hr*60;
			
			var bool =false;
			
			string+="<li>"+r.nom + ": ";
			
			if(hr>0){
				bool=true;
				if(hr === 1)
					string+=hr + " heure ";
				else
					string+=hr + " heures ";
			}
			
			if(min>0 || bool){
				bool=true;
				if(min == 0 || min == 1)
					string+=min + " minute ";
				else
					string+=min + " minutes ";
			}
			if(sec>0 || bool){
				if(sec == 0 || sec == 1)
					string+=sec + " seconde ";
				else
					string+=sec + " secondes ";
			}
			
			if(ms == 0 || ms == 1)
				string+= ms + " milliseconde</li>";
			else
				string+= ms + " millisecondes</li>";
		}
		
		document.getElementById("liste-classement").innerHTML+=string;	
	}

};


