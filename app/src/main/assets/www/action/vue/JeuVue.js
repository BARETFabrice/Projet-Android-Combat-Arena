const JeuVue = function()
{
    var combatArenaJeu;
    
    this.initialiser=function()
    {
        document.body.innerHTML = Page.pageJeu;
        
        combatArena = CombatArena();
    }   
};