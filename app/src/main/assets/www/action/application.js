(function()
 {
    var combatArenaAccueilVue;
    var combatArenaInscriptionVue;
    var combatArenaJeuVue;
    
    function Application()
    {
        $(window).on('hashchange', $.proxy(Application.naviguer,this));
        Application.naviguer();
    }
    
    Application.Page = 
    {
        pageAccueilCombatArena : document.querySelector("#page-accueil-combat-arena").innerHTML,
        pageInscriptionCombatArena : document.querySelector("#page-inscription-combat-arena").innerHTML,
        pageJeuCombatArena : document.querySelector("#page-jeu-combat-arena").innerHTML
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
			combatArenaAccueilVue = new CombatArenaAccueilVue();
		}
        else if(ancre.match(/^#inscription/))
        {
            combatArenaInscriptionVue = new CombatArenaInscriptionVue();
        }
        else if(ancre.match(/^#lancer-jeu/))
        {
            window.location.hash = "#jeu";
        }
        else if(ancre.match(/^#jeu/))
        {
            combatArenaJeuVue = new CombatArenaJeuVue();
        }
    };
    
    Application = new Application();
}
)();