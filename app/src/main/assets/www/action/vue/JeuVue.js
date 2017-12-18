const JeuVue = function()
{
    var combatArena;
    
    this.initialiser=function()
    {
        document.body.innerHTML = Page.pageJeu;
        
        combatArena = new CombatArena();
    }
    
    this.getNombreDeChute = function()
    {
        return combatArena.getNombreDeChute();
    }
    
    this.getNombreDePieceRammasser = function()
    {
        return combatArena.getNombreDePieceRammasser();
    }
    
    this.getChrono = function()
    {
        return combatArena.getChrono();
    }
    
    this.isVictoire =  function()
    {
        return combatArena.isVistoire();
    }
};