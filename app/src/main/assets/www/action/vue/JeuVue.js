const JeuVue = function()
{
    var combatArenaJeu;
    
    this.initialiser=function()
    {
        document.querySelector("body").innerHTML = Page.pageJeu;
        
        combatArena = CombatArena();
    }   
};