var CombatArenaJoueur = function(combatArenaMap)
{
    var joueurConteneur;
    var joueurTexture;
    var joueurSprite;
    var combatArenaMap = combatArenaMap;
    var positionX;
    var positionY;
    
    function initialiser()
    {
        joueurConteneur = new PIXI.Container();
        
        joueurTexture = PIXI.Texture.fromImage(Configuration.cheminImage + CombatArenaJoueur.Configuration.image.image);
        
        joueurSprite = new PIXI.Sprite(joueurTexture);
        joueurSprite.position.x = CombatArenaJoueur.Configuration.image.positionX;
        joueurSprite.position.y = CombatArenaJoueur.Configuration.image.positionX;
        
        positionX = CombatArenaJoueur.Configuration.positionX;
        positionY = CombatArenaJoueur.Configuration.positionY;
        
        console.log("height carte " + combatArenaMap.height);
        console.log("width carte " + combatArenaMap.width);
        
        joueurConteneur.addChild(joueurSprite);
        combatArenaMap.addChild(joueurConteneur);
        
        joueurConteneur.position.x = positionX;
        joueurConteneur.position.y = positionY;
        
        /*combatArenaMap.interactive = true;
        combatArenaMap.on("click", function(e){
            console.log(combatArenaMap.);
        });*/
        
        console.log("dispatchEvent(Evenement.finChargementCombatArena);");
        dispatchEvent(Evenement.finChargementCombatArena);
    }
    
    initialiser();
    
    this.deplacementADroite = function()
    {
        positionX += CombatArenaJoueur.Configuration.vitesseDeDeplacement;
    }
    
    this.deplacementAGauche = function()
    {
         positionX -= CombatArenaJoueur.Configuration.vitesseDeDeplacement;
    }
    
    this.rafraichir = function()
    {
        joueurConteneur.x = positionX;
        joueurConteneur.y = positionY;
    }
};

CombatArenaJoueur.Configuration = 
{
    image:
    {
        cheminImage: "asset/image/",
        image: "bunny.png",
        positionX : 0,
        positionY : 0
    },
    positionX : 0,
    positionY : 7480,
    vitesseDeDeplacement : 12
}