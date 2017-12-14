var CombatArena = function()
{
    var app;
    var combatArenaMap;
    var combatArenaJoueur;
    var combatArenaCommande;
    var test = false;
    
    function initialiser()
    {
        //console.log("lancement du jeu");
        
        app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
        document.body.appendChild(app.view);
        
        addEventListener(Evenement.finChargementSpriteCombatArenaMap.type, chargementDesJoueur);
        addEventListener(Evenement.finChargementCombatArena.type, commencerCombatArena);
        
        combatArenaMap = new CombatArenaMap(app);
    }
    
    initialiser();
    
    function chargementDesJoueur()
    {
        combatArenaJoueur = new CombatArenaJoueur(combatArenaMap.getMapConteneur());
    }
    
    function commencerCombatArena()
    {
        combatArenaCommande = new CombatArenaCommande(app);
        
        const ticker = new PIXI.ticker.Ticker();
        ticker.stop();
        ticker.add(rafraichir);
        ticker.start();
        
        
        //deactiver event
    }
    
    function rafraichir(deltaTime)
    {
        test = false;
        (combatArenaMap.getTabSpriteSol()).forEach(function(sprite){
            if(!combatArenaJoueur.isCollisionAvecSol(sprite) && !test)
            {
                combatArenaJoueur.setJoueurEnChuteLibre(true);
            }
            else
            {
                combatArenaJoueur.setJoueurEnChuteLibre(false);
                test = true;
            }
        });
        
        
        if(combatArenaCommande.isActionSurFlecheDroite())
        {
            combatArenaJoueur.deplacementADroite();
        }
        else if(combatArenaCommande.isActionSurFlecheGauche())
        {
            combatArenaJoueur.deplacementAGauche();
        }
        
        combatArenaJoueur.rafraichir();
        
        /*console.log("Position player = x:" + combatArenaJoueur.getPositionJoueur().x + ", y:" + combatArenaJoueur.getPositionJoueur().y);*/
        
        combatArenaMap.deplacerMondeVersPosition(combatArenaJoueur.getPositionJoueur());
        
        combatArenaMap.rafraichir();
    }
};

CombatArena.Configuration =
{
    cheminImage: "asset/image/"
};

CombatArena.Configuration.initialiser = function()
{
    window['Configuration'] = CombatArena.Configuration;
}();

CombatArena.Evenement = 
{
    finChargementSpriteCombatArenaMap : document.createEvent('Event'),
    finChargementCombatArena : document.createEvent('Event')
};

CombatArena.Evenement.initialiser = function()
{
    for(key in CombatArena.Evenement)
    {
        if(CombatArena.Evenement[key] instanceof Event)
        CombatArena.Evenement[key].initEvent(key, false, true);
    }
    window['Evenement'] = CombatArena.Evenement;
}();
