var JeuVue = function()
{
    var combatArenaJeu;
    
    function initialiser()
    {
        document.querySelector("body").innerHTML = Page.pageJeu;
        
        combatArena = CombatArena();
    }
    
    initialiser();
    
    
};