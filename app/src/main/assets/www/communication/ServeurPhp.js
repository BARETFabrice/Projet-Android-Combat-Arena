const ServeurPhp={
	
	inscription:function(nom,mdp,age,couleur,volume,courriel){
		
		var apres=function(objet){			
			
			if(objet.error){
				console.log(objet);
				//handleEvent
				return;
			}
			
			ServeurPhp.connexion(nom, mdp);
			
		};
		
		couleur=couleur.slice(1);
		
		var url="http://fredericsimoneau.com/combat-arena/inscription.php?nom="+nom+"&motdepasse="+mdp+"&age="+age+"&couleur="+couleur+"&volume="+volume+"&email="+courriel;
		
		ServeurPhp.envoyerRequeteAjax(url,apres);
	},
	
	modifierProfil:function(nom,age,couleur,volume,courriel){
		var apres=function(objet){			
			
			if(objet.error){
				console.log(objet);
				//handleEvent
				return;
			}
			
			Data.joueur=objet;
		};
		
		Data.joueur.age=age;
		Data.joueur.couleur_logo=couleur;
		Data.joueur.volumeSon=volume;
		
		couleur=couleur.slice(1);
		
		var url="http://fredericsimoneau.com/combat-arena/modifierUtilisateur.php?id="+Data.joueur.id+"&nom="+nom+"&age="+age+"&couleur="+couleur+"&volume="+volume+"&courriel="+courriel;
		
		ServeurPhp.envoyerRequeteAjax(url,apres);
	},
	
	connexion:function(nom, mdp){
		
		var apres=function(objet){
				
			console.log(objet);
			
			if(objet.error){
				//handleEvent
				return;
			}
			
			Data.joueur=objet;
			
			localStorage['combat-arena-token']=JSON.stringify(Data.joueur.token);
			localStorage['combat-arena-id']=JSON.stringify(Data.joueur.id);
		};
		
		var url="http://fredericsimoneau.com/combat-arena/connexion.php?nom="+nom+"&motdepasse="+mdp;
		
		ServeurPhp.envoyerRequeteAjax(url,apres);
	},
	
	connexionToken:function(){
		if(!localStorage['combat-arena-token'] || !localStorage['combat-arena-id'])
			return;
		
		var token = JSON.parse(localStorage['combat-arena-token']);
		var id = JSON.parse(localStorage['combat-arena-id']);
		
		Data.joueur.id=id;
		Data.joueur.token=token;
		
		var apres=function(objet){
				
			console.log(objet);
			
			if(objet.error){
				//handleEvent
				return;
			}
			
			Data.joueur=objet;
		};
		
		var url="http://fredericsimoneau.com/combat-arena/connexionParToken.php?id="+id+"&token="+token;
		
		ServeurPhp.envoyerRequeteAjax(url,apres);
	},
	
	deconnexion:function(){
		delete localStorage['combat-arena-token'];
		delete localStorage['combat-arena-id'];
		
		if(!Data.joueur.id)
			return;
		
		var apres=function(objet){
			
			if(objet.error){
				//handleEvent
				return;
			}
		};
		
		var url="http://fredericsimoneau.com/combat-arena/deconnexion.php?id="+Data.joueur.id;
		
		ServeurPhp.envoyerRequeteAjax(url,apres);
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