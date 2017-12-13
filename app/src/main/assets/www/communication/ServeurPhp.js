const ServeurPhp={
	
	inscription:function(nom,mdp,age,couleur,volume,courriel){
		
		var apres=function(reussi){			
			
			if(!reussi){
				console.log(reussi);
				//handleEvent
				return;
			}
			
			ServeurPhp.connexion(nom, mdp);
			
		};
		
		couleur=couleur.slice(1);
		
		var url="http://fredericsimoneau.com/combat-arena/inscription.php?nom="+nom+"&motdepasse="+mdp+"&age="+age+"&couleur="+couleur+"&volume="+volume+"&email=test@test.com";
		
		ServeurPhp.envoyerRequeteAjax(url,apres);
	},
	
	connexion:function(nom, mdp){
		var apres=function(objet){
			
			console.log(objet);
			
			if(objet.error){
				//handleEvent
				return;
			}
		};
		
		var url="http://fredericsimoneau.com/combat-arena/login.php?nom="+nom+"&motdepasse="+mdp;
		
		ServeurPhp.envoyerRequeteAjax(url,apres);
	},
	
	connexionToken:function(token){
		
	},
	
	deconnexion:function(){
		
	},
	
	modifierProfil:function(nom,age,couleur,volume,courriel){
		
	},
	
	envoyerRequeteAjax:function(url, fonctionApres){
		
		if(!url){
			console.error("veuillez fournir un url");
			return;
		}
		console.log(url);
		
		if(!fonctionApres)
			fonctionApres=function(e){console.log(e);};
		
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				fonctionApres(JSON.parse(this.responseText));
			}
		};
		xhttp.open("GET", url, true);
		xhttp.send();
	}
}