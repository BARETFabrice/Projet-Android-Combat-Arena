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
		Sons.setVolume(volume/100)
		
		couleur=couleur.slice(1);
		
		var url="http://fredericsimoneau.com/combat-arena/modifierUtilisateur.php?id="+Data.joueur.id+"&nom="+nom+"&age="+age+"&couleur="+couleur+"&volume="+volume+"&courriel="+courriel;
		
		ServeurPhp.envoyerRequeteAjax(url,apres);
	},
	
	connexion:function(nom, mdp){
		
		var apres=function(objet){
			
			
			if(objet.error){
				console.log(objet);
				//handleEvent
				return;
			}
			
			Data.joueur=objet;
			Sons.setVolume(Data.joueur.volumeSon/100)
			
			localStorage['combat-arena-token']=JSON.stringify(Data.joueur.token);
			localStorage['combat-arena-id']=JSON.stringify(Data.joueur.id);
			
			if(!window.location.hash){
				AccueilVue.initialiser();
			}
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
				
			if(objet.error){
				console.log(objet);
				//handleEvent
				return;
			}
			
			Data.joueur=objet;
			Sons.setVolume(Data.joueur.volumeSon/100)
		};
		
		var url="http://fredericsimoneau.com/combat-arena/connexionParToken.php?id="+id+"&token="+token;
		
		ServeurPhp.envoyerRequeteAjax(url,apres);
	},
	
	deconnexion:function(id){
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
		
		delete Data.joueur;
		Data.joueur={};
		Sons.setVolume(1);
		
		ServeurPhp.envoyerRequeteAjax(url,apres);
	},
	
	terminerPartie:function(victoire, chutes, temps){
		var apres=function(objet){
			
			if(objet.error){
				//handleEvent
				return;
			}
		};
		
		if(victoire) 	victoire=1;
		else			victoire=0;
		
		var url="http://fredericsimoneau.com/combat-arena/ajoutPartie.php?id="+Data.joueur.id+"&victoire="+victoire+"&chutes="+chutes+"&duree="+temps;
		
		ServeurPhp.envoyerRequeteAjax(url,apres);
	},
	
	classementsVictoires:function(){
		var apres=function(objet){
			
			console.log(objet);
			
			if(objet.error){
				//handleEvent
				return;
			}
		};
		
		var url="http://fredericsimoneau.com/combat-arena/listeJoueursParVictoires.php";
		
		ServeurPhp.envoyerRequeteAjax(url,apres);
	},
	
	classementsTemps:function(){
		var apres=function(objet){
			
			console.log(objet);
			
			if(objet.error){
				//handleEvent
				return;
			}
		};
		
		var url="http://fredericsimoneau.com/combat-arena/listeJoueursParTemps.php";
		
		ServeurPhp.envoyerRequeteAjax(url,apres);
	},
	
	classementsMorts:function(){
		var apres=function(objet){
			
			console.log(objet);
			
			if(objet.error){
				//handleEvent
				return;
			}
		};
		
		var url="http://fredericsimoneau.com/combat-arena/listeJoueursParChutes.php";
		
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