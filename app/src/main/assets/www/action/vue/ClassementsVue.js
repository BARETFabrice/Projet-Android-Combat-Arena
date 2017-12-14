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
			
			string+="<li>"+r.nom + ": " + r.nombreChutes + " chutes</li>"
		}
		
		document.getElementById("liste-classement").innerHTML+=string;
	},
	
	classementVictoires:function(objet){
		if(!new RegExp(/^#classements\/victoires/).test(window.location.hash)) return;
		
		ClassementsVue.initialiser();
		
		var string="";
		
		for(var i in objet){
			var r=objet[i];
			
			string+="<li>"+r.nom + ": " + r.victoires + " victoires</li>"
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
				string+=hr + " heures ";
			}
			
			if(min>0 || bool){
				bool=true;
				string+=min + " minutes ";
			}
			if(sec>0 || bool)	string+=sec + " secondes ";
			string+= ms + " millisecondes</li>"
		}
		
		document.getElementById("liste-classement").innerHTML+=string;	
	}

};


