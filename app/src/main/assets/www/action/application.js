(function()
 {
    var combatArenaAccueilVue;
    var combatArenaInscriptionVue;
    var combatArenaJeuVue;
    
    function Application()
    {
        window.onhashchange=Application.naviguer;
        window.location.hash="#";
		Application.naviguer();
    }
    
    Application.Page = 
    {
        pageAccueil : document.getElementById("page-accueil-combat-arena").innerHTML,
        pageInscription : document.getElementById("page-inscription-combat-arena").innerHTML,
        pageJeu : document.getElementById("page-jeu-combat-arena").innerHTML
    };
    
    Application.Page.initialiser = function()
    {
        window['Page'] = Application.Page;
    }();
    
    Application.naviguer = function()
    {
        var ancre = window.location.hash;
		
		if(!ancre)
		{
			accueilVue = new AccueilVue();
		}
        else if(new RegExp(/^#inscription/).test(ancre))
        {
            inscriptionVue = new InscriptionVue();
        }
        else if(new RegExp(/^#lancer-jeu/).test(ancre))
        {
            window.location.hash = "#jeu";
        }
        else if(new RegExp(/^#jeu/).test(ancre))
        {
            JeuVue = new JeuVue();
        }
		else{
			ancre="#"
		}
    };
    
    Application = new Application();
}
)();