(function()
 {
    var accueilVue;
    var inscriptionVue;
    var jeuVue;
    
    function Application()
    {
		Sons.playMusic("theme_menu");
        window.onhashchange=Application.naviguer;
        window.location.hash="#";
		Application.naviguer();
    }
    
    Application.Page = 
    {
        pageAccueil : document.getElementById("page-accueil-combat-arena").innerHTML,
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
			accueilVue = new AccueilVue();
		}
        else if(new RegExp(/^#inscription/).test(ancre))
        {
            inscriptionVue = new InscriptionVue();
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
            jeuVue = new JeuVue();
        }
		else{
			ancre="#"
		}
    };
    
    Application = new Application();
}
)();