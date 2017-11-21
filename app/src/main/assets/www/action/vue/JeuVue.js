var CombatArenaJeuVue = function()
{
    var combatArenaJeu;
    
    function initialiser()
    {
        document.querySelector("body").innerHTML = Page.pageJeuCombatArena;
        
        combatArenaJeu = CombatArenaJeu();
    }
    
    initialiser();
    
    
};