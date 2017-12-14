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
        
        flecheGauche.position.x = CombatArenaCommande.Configuration.image.flecheGauche.positionX;
        flecheGauche.position.y = CombatArenaCommande.Configuration.image.flecheGauche.positionY;
        flecheDroite.position.x = CombatArenaCommande.Configuration.image.flecheDroite.positionX;
        flecheDroite.position.y = CombatArenaCommande.Configuration.image.flecheDroite.positionY;
        flecheHaut.position.x = CombatArenaCommande.Configuration.image.flecheHaut.positionX;
        flecheHaut.position.y = CombatArenaCommande.Configuration.image.flecheHaut.positionY;
        
        pixiApp.stage.addChild(flecheGauche);
        pixiApp.stage.addChild(flecheDroite);
        pixiApp.stage.addChild(flecheHaut);
        
        actionSurFlecheDroite = false;
        actionSurFlecheGauche = false;
        actionSurFlecheHaut = false;
        
        flecheHaut.buttonMode = true;
        
        flecheDroite.interactive = true;
        flecheGauche.interactive = true;
        flecheHaut.interactive = true;
        
        flecheDroite.on("mousedown", flecheDroiteEnAction);
        flecheGauche.on("mousedown", flecheGaucheEnAction);
        flecheHaut.on("pointerdown", flecheHautEnAction);
        
        flecheDroite.on("mouseup", flecheDroitePasEnAction);
        flecheGauche.on("mouseup", flecheGauchePasEnAction);
        flecheHaut.on("pointerup", flecheHautPasEnAction);
        
        flecheDroite.on("mouseout", flecheDroitePasEnAction);
        flecheGauche.on("mouseout", flecheGauchePasEnAction);
        flecheHaut.on("pointerout", flecheHautPasEnAction);
        
        //clavier
        addEventListener("keydown", interpreterEvenementsClavier);
        addEventListener("keyup", interpreterEvenementsClavier);
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
        }
    },
    toucheKey :
    {
        flecheBas : 40,
        flecheHaut : 38,
        flecheGauche : 37,
        flecheDroite : 39
    }
}