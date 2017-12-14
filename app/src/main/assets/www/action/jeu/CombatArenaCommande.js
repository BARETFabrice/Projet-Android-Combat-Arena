var CombatArenaCommande = function(pixiApp)
{
    var flecheGaucheTexture;
    var flecheDroiteTexture;
    var flecheHautTexture;
    
    var flecheGauche;
    var flecheDroite;
    var flecheHaut;
    
    var actionSurFlecheDroite;
    var actionSurFlecheGauche;
    var actionSurFlecheHaut;
    
    function initialiser()
    {
        flecheGaucheTexture = PIXI.Texture.fromImage(Configuration.cheminImage + CombatArenaCommande.Configuration.image.flecheGauche.image);
        flecheDroiteTexture = PIXI.Texture.fromImage(Configuration.cheminImage + CombatArenaCommande.Configuration.image.flecheDroite.image);
        flecheHautTexture = PIXI.Texture.fromImage(Configuration.cheminImage + CombatArenaCommande.Configuration.image.flecheHaut.image);
        
        flecheGauche = new PIXI.Sprite(flecheGaucheTexture);
        flecheDroite = new PIXI.Sprite(flecheDroiteTexture);
        flecheHaut = new PIXI.Sprite(flecheHautTexture);
        
        //console.log(pixiApp.renderer.width);
        
        flecheGauche.position.x = 0 * CombatArenaCommande.Configuration.image.tailleX;
        flecheGauche.position.y = pixiApp.renderer.height - CombatArenaCommande.Configuration.image.tailleY;
        flecheDroite.position.x = 1 * CombatArenaCommande.Configuration.image.tailleX;
        flecheDroite.position.y = pixiApp.renderer.height - CombatArenaCommande.Configuration.image.tailleY;
        flecheHaut.position.x = pixiApp.renderer.width - CombatArenaCommande.Configuration.image.tailleX;
        flecheHaut.position.y = pixiApp.renderer.height - CombatArenaCommande.Configuration.image.tailleY;
        
        pixiApp.stage.addChild(flecheGauche);
        pixiApp.stage.addChild(flecheDroite);
        pixiApp.stage.addChild(flecheHaut);
        
        actionSurFlecheDroite = false;
        actionSurFlecheGauche = false;
        actionSurFlecheHaut = false;
        
        flecheDroite.buttonMode = true;
        flecheGauche.buttonMode = true;
        flecheHaut.buttonMode = true;
        
        flecheDroite.interactive = true;
        flecheGauche.interactive = true;
        flecheHaut.interactive = true;
        
        flecheDroite.on("pointerdown", flecheDroiteEnAction);
        flecheGauche.on("pointerdown", flecheGaucheEnAction);
        flecheHaut.on("pointerdown", flecheHautEnAction);
        
        flecheDroite.on("pointerup", flecheDroitePasEnAction);
        flecheGauche.on("pointerup", flecheGauchePasEnAction);
        flecheHaut.on("pointerup", flecheHautPasEnAction);
        
        flecheDroite.on("pointerupoutside", flecheDroitePasEnAction);
        flecheGauche.on("pointerupoutside", flecheGauchePasEnAction);
        flecheHaut.on("pointerupoutside", flecheHautPasEnAction);
        
        //clavier
        addEventListener("keydown", interpreterEvenementsClavier);
        addEventListener("keyup", interpreterEvenementsClavier);
        
        //touch-only event
        //flecheDroite.on("touchstart", flecheDroiteEnAction);
        //flecheGauche.on("touchend", flecheGaucheEnAction);
        //flecheDroite.on("touchstart", flecheDroitePasEnAction);
        //flecheGauche.on("touchend", flecheGauchePasEnAction);
    }
    
    initialiser();
    
    function interpreterEvenementsClavier(evenement)
    {
        if(evenement.type == "keydown")
        {
            //console.log("tou:: " + evenement.keyCode);
            switch(evenement.keyCode)
            {
                case CombatArenaCommande.Configuration.toucheKey.flecheHaut:
                    flecheHautEnAction();
                    break;
                case CombatArenaCommande.Configuration.toucheKey.flecheDroite:
                    flecheDroiteEnAction();
                    break;
                case CombatArenaCommande.Configuration.toucheKey.flecheGauche:
                    flecheGaucheEnAction();
                    break;
            }
        }
        else if(evenement.type == "keyup")
        {
            switch(evenement.keyCode)
            {
                case CombatArenaCommande.Configuration.toucheKey.flecheHaut:
                    flecheHautPasEnAction();
                    break;
                case CombatArenaCommande.Configuration.toucheKey.flecheDroite:
                    flecheDroitePasEnAction();
                    break;
                case CombatArenaCommande.Configuration.toucheKey.flecheGauche:
                    flecheGauchePasEnAction();
                    break;
            }
        }
    }
    
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
    
    function flecheHautEnAction()
    {
        actionSurFlecheHaut = true;
        
        setTimeout(function(){
            //console.log("stop saut");
            actionSurFlecheHaut = false;
        }, 600);
    }
    
    function flecheHautPasEnAction()
    {
        actionSurFlecheHaut = false;
    }
    
    this.isActionSurFlecheHaut = function()
    {
        return actionSurFlecheHaut;
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
            positionX : 200,
            positionY : 0
        },
        flecheHaut :
        {
            image : "fleche-haut.png",
            positionX : 400,
            positionY : 0
        },
        tailleX : 200,
        tailleY : 200
    },
    toucheKey :
    {
        flecheBas : 40,
        flecheHaut : 38,
        flecheGauche : 37,
        flecheDroite : 39
    }
}