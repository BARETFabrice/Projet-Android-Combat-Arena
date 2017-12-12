var CombatArenaCommande = function(pixiApp)
{
    var flecheGaucheTexture;
    var flecheDroiteTexture;
    
    var flecheGauche;
    var flecheDroite;
    
    var actionSurFlecheDroite;
    var actionSurFlecheGauche;
    
    function initialiser()
    {
        flecheGaucheTexture = PIXI.Texture.fromImage(Configuration.cheminImage + CombatArenaCommande.Configuration.image.flecheGauche.image);
        flecheDroiteTexture = PIXI.Texture.fromImage(Configuration.cheminImage + CombatArenaCommande.Configuration.image.flecheDroite.image);
        
        flecheGauche = new PIXI.Sprite(flecheGaucheTexture);
        flecheDroite = new PIXI.Sprite(flecheDroiteTexture);
        
        flecheGauche.position.x = CombatArenaCommande.Configuration.image.flecheGauche.positionX;
        flecheGauche.position.y = CombatArenaCommande.Configuration.image.flecheGauche.positionY;
        flecheDroite.position.x = CombatArenaCommande.Configuration.image.flecheDroite.positionX;
        flecheDroite.position.y = CombatArenaCommande.Configuration.image.flecheDroite.positionY;
        
        pixiApp.stage.addChild(flecheGauche);
        pixiApp.stage.addChild(flecheDroite);
        
        actionSurFlecheDroite = false;
        actionSurFlecheGauche = false;
        
        flecheDroite.interactive = true;
        flecheGauche.interactive = true;
        
        flecheDroite.on("mousedown", flecheDroiteEnAction);
        flecheGauche.on("mousedown", flecheGaucheEnAction);
        
        flecheDroite.on("mouseup", flecheDroitePasEnAction);
        flecheGauche.on("mouseup", flecheGauchePasEnAction);
        
        flecheDroite.on("mouseout", flecheDroitePasEnAction);
        flecheGauche.on("mouseout", flecheGauchePasEnAction);
    }
    
    initialiser();
    
    function flecheDroiteEnAction()
    {
        actionSurFlecheDroite = true;
    }
    
    function flecheDroitePasEnAction()
    {
        actionSurFlecheDroite = false;
    }
    
    this.isActionSurFlecheDroite = function()
    {
        return actionSurFlecheDroite;
    };
    
    function flecheGaucheEnAction()
    {
        actionSurFlecheGauche = true;
    }
    
    function flecheGauchePasEnAction()
    {
        actionSurFlecheGauche = false;
    }
    
    this.isActionSurFlecheGauche = function()
    {
        return actionSurFlecheGauche;
    };
};

CombatArenaCommande.Configuration = 
{
    image:
    {
        flecheGauche :
        {
            image : "fleche-gauche.png",
            positionX : 0,
            positionY : 0
        },
        flecheDroite :
        {
            image : "fleche-droite.png",
            positionX : 100,
            positionY : 0
        }
    }
}