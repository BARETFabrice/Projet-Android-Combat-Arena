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
        else if(ancre.match(/^#inscription/))
        {
            inscriptionVue = new InscriptionVue();
        }
        else if(ancre.match(/^#lancer-jeu/))
        {
            window.location.hash = "#jeu";
        }
        else if(ancre.match(/^#jeu/))
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