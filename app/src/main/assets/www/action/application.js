(function()
 {
    var profilVue;
    var inscriptionVue;
    var jeuVue;
    var connecterVue;
    
    function Application()
    {
		/*window.onerror = function(msg, url, linenumber) {
			alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
			return true;
		}*/
		ServeurPhp.connexionToken();
		Sons.playMusic("theme_menu");
        window.onhashchange=Application.naviguer;
        window.location.hash="#";
		Application.naviguer();
    }
    
    Application.Page = 
    {
        pageAccueil : document.getElementById("page-accueil-combat-arena").innerHTML,
        pageConnecter : document.getElementById("page-connecter-combat-arena").innerHTML,
        pageClassements : document.getElementById("page-classements-combat-arena").innerHTML,
        pageProfil : document.getElementById("page-profil-combat-arena").innerHTML,
        pageInscription : document.getElementById("page-inscription-combat-arena").innerHTML,
        pageJeu : document.getElementById("page-jeu-combat-arena").innerHTML,
		pageFinPartie : document.getElementById("page-fin-partie-arena").innerHTML
    };
    
    Application.Page.initialiser = function()
    {
        window['Page'] = Application.Page;
    }();
    
    Application.naviguer = function()
    {
		Sons.playSound("click");
        var ancre = window.location.hash;
		
		if(!ancre)
		{
			AccueilVue.initialiser();
		}
        else if(new RegExp(/^#inscription/).test(ancre))
        {
            if(!inscriptionVue) inscriptionVue = new InscriptionVue();
			inscriptionVue.initialiser();
        }
		else if(new RegExp(/^#profil/).test(ancre))
        {
            if(!Data.joueur.id) window.location.hash="#";
			
			if(!profilVue) profilVue = new ProfilVue();
			profilVue.initialiser();
        }
		else if(new RegExp(/^#connexion/).test(ancre))
        {
            if(!connecterVue) connecterVue = new ConnecterVue();
			connecterVue.initialiser();
        }
		else if(new RegExp(/^#deconnexion/).test(ancre))
        {
            ServeurPhp.deconnexion();
			AccueilVue.initialiser();
        }
		else if(new RegExp(/^#classements\/temps/).test(ancre))
        {
			ClassementsVue.initialiser();
			ServeurPhp.classementsTemps();
        }
		else if(new RegExp(/^#classements\/victoires/).test(ancre))
        {
			ClassementsVue.initialiser();
			ServeurPhp.classementsVictoires();
        }
		else if(new RegExp(/^#classements\/chutes/).test(ancre))
        {
			ClassementsVue.initialiser();
			ServeurPhp.classementsMorts();
        }
		else if(new RegExp(/^#classements/).test(ancre))
        {
			ClassementsVue.initialiser();
        }
		else if(new RegExp(/^#fin-partie/).test(ancre))
        {
			if(!Data.joueur.id) window.location.hash="#";
            
            var chrono = jeuVue.getChrono();
            var nbPieceRamasser = jeuVue.getNombreDePieceRammasser();
            var nbChute = jeuVue.getNombreDeChute();
            
            var partie={chutes: (Number(nbChute)||0), duree: (Number(chrono)||0), victoire: (Number(nbPieceRamasser>=5)||0)};
			FinPartieVue.recevoirPartie(partie);
			
			ServeurPhp.terminerPartie(partie.victoire,partie.chutes,partie.duree);
			
			Sons.playMusic("theme_menu");
			FinPartieVue.initialiser();
			
            ServeurPhp.dernierePartieJoueur();
            ServeurPhp.moyenneJoueur();
        }
        else if(new RegExp(/^#jeu/).test(ancre))
        {
			/*window.location.hash="#fin-partie";
			return;*/
			
			console.log(Data.joueur.id);
			
			if(!Data.joueur.id) window.location.hash="#";
			
			Sons.playMusic("theme_combat");
            jeuVue = new JeuVue();
			jeuVue.initialiser();
        }
		else{
			window.location.hash="#";
		}
    };
    
    Application = new Application();
}
)();