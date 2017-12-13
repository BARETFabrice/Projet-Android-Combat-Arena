(function()
 {
    var accueilVue;
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
		Sons.playMusic("theme_menu");
        window.onhashchange=Application.naviguer;
        window.location.hash="#";
		Application.naviguer();
    }
    
    Application.Page = 
    {
        pageAccueil : document.getElementById("page-accueil-combat-arena").innerHTML,
        pageConnecter : document.getElementById("page-connecter-combat-arena").innerHTML,
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
			if(!accueilVue) accueilVue = new AccueilVue();
			accueilVue.initialiser();
		}
        else if(new RegExp(/^#inscription/).test(ancre))
        {
            if(!inscriptionVue) inscriptionVue = new InscriptionVue();
			inscriptionVue.initialiser();
        }
		else if(new RegExp(/^#profil/).test(ancre))
        {
            if(!profilVue) profilVue = new ProfilVue();
			profilVue.initialiser();
        }
		else if(new RegExp(/^#connexion/).test(ancre))
        {
            if(!connecterVue) connecterVue = new ConnecterVue();
			connecterVue.initialiser();
        }
		else if(new RegExp(/^#fin-partie/).test(ancre))
        {
			Sons.playMusic("theme_menu");
            finPartieVue = new FinPartieVue();
        }
        else if(new RegExp(/^#lancer-jeu/).test(ancre))
        {
            window.location.hash = "#jeu";
        }
        else if(new RegExp(/^#jeu/).test(ancre))
        {
			Sons.playMusic("theme_combat");
            if(!jeuVue) jeuVue = new JeuVue();
			jeuVue.initialiser();
        }
		else{
			ancre="#"
		}
    };
    
    Application = new Application();
}
)();