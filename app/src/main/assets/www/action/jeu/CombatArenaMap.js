var CombatArenaMap = function(pixiApp)
{
    var mapConteneur;
    var mapTexture;
    var map;
    var pixiApp = pixiApp;
    var positionX;
    var positionY;
    var tabSpriteSol;
    var tabSpritePiece;
    
    
    function initialiser()
    {
        mapConteneur = new PIXI.Container();
        
        //console.log("height scene" + pixiApp.view.height);
        //console.log("width scene" + pixiApp.view.width);
        
        positionY = -(CombatArenaMap.Configuration.tailleYimage) + pixiApp.view.height;
        positionX = CombatArenaMap.Configuration.positionX;
        
        var someImage = new Image();
        someImage.src = Configuration.cheminImage + CombatArenaMap.Configuration.image.arrierPlan;
        someImage.onload = function()
        {
            mapTexture = new PIXI.Texture(new PIXI.BaseTexture(someImage));
            
            map = new PIXI.Sprite(mapTexture);
            map.position.x = CombatArenaMap.Configuration.positionX;
            map.position.y = CombatArenaMap.Configuration.positionY;
            
            mapConteneur.position.x = positionX;
            mapConteneur.position.y = positionY;
            
            mapConteneur.addChild(map);
            pixiApp.stage.addChild(mapConteneur);
            
            var mondeTextures = new PIXI.BaseTexture.fromImage(Configuration.cheminImage + CombatArenaMap.Configuration.image.mondeObj.image);
            
            /*var solTexture01 = new PIXI.Texture(mondeTextures, new PIXI.Rectangle(0, 0, 319, 100));
            var sol01 = new PIXI.Sprite(solTexture01);
            mapConteneur.addChild(sol01);
            sol01.position.x = 0;
            sol01.position.y = 7560;*/
            
            tabSpriteSol = new Array();
            
            var nombreDeSrpiteSol01 = 4;
            var tabSpriteSol01 = new Array();
            for(var i = 0; i < nombreDeSrpiteSol01; i++)
            {
                tabSpriteSol01.push(
                    new PIXI.Sprite(
                        new PIXI.Texture(mondeTextures, 
                                         new PIXI.Rectangle(CombatArenaMap.Configuration.image.mondeObj.sol01.posX, 
                                                            CombatArenaMap.Configuration.image.mondeObj.sol01.posY, 
                                                            CombatArenaMap.Configuration.image.mondeObj.sol01.largeur, CombatArenaMap.Configuration.image.mondeObj.sol01.hauteur))));
                
                mapConteneur.addChild(tabSpriteSol01[i]);
                tabSpriteSol01[i].position.x = (i * CombatArenaMap.Configuration.image.mondeObj.sol01.largeur) - 30;
                tabSpriteSol01[i].position.y = CombatArenaMap.Configuration.tailleYimage - CombatArenaMap.Configuration.image.mondeObj.sol01.hauteur;
                
                tabSpriteSol.push(tabSpriteSol01[i]);
            }
            
            tabSpriteSol.push(new PIXI.Sprite(
                        new PIXI.Texture(mondeTextures, 
                                         new PIXI.Rectangle(CombatArenaMap.Configuration.image.mondeObj.sol01.posX, 
                                                            CombatArenaMap.Configuration.image.mondeObj.sol01.posY, 
                                                            CombatArenaMap.Configuration.image.mondeObj.sol01.largeur, CombatArenaMap.Configuration.image.mondeObj.sol01.hauteur))));
            
            mapConteneur.addChild(tabSpriteSol[tabSpriteSol01.length]);
            tabSpriteSol[tabSpriteSol01.length].position.x = 0;
            tabSpriteSol[tabSpriteSol01.length].position.y = CombatArenaMap.Configuration.tailleYimage - CombatArenaMap.Configuration.image.mondeObj.sol01.hauteur - CombatArenaMap.Configuration.hauteurPalier;
            
            tabSpritePiece = new Array();
            
            tabSpritePiece.push(new PIXI.Sprite(
                        new PIXI.Texture(mondeTextures, 
                                         new PIXI.Rectangle(CombatArenaMap.Configuration.piece.frame01.positionX,
                                                            CombatArenaMap.Configuration.piece.frame01.positionY, 
                                                            CombatArenaMap.Configuration.piece.frame01.largeur, CombatArenaMap.Configuration.piece.frame01.hauteur))));
            mapConteneur.addChild(tabSpritePiece[0]);
            tabSpritePiece[0].position.x = 15;
            tabSpritePiece[0].position.y = CombatArenaMap.Configuration.tailleYimage - CombatArenaMap.Configuration.image.mondeObj.sol01.hauteur - CombatArenaMap.Configuration.hauteurPalier - 80;
            
            
            
            //console.log("dispatchEvent(Evenement.finChargementSpriteCombatArenaMap);");
            dispatchEvent(Evenement.finChargementSpriteCombatArenaMap);
        }
    }
    
    initialiser();
    
    this.getMapConteneur = function()
    {
        return mapConteneur;
    };
    
    this.getTabSpriteSol = function()
    {
        return tabSpriteSol;
    }
    
    this.getTabSpritePiece = function()
    {
        return tabSpritePiece;
    }
    
    this.deplacerMondeVersPosition = function(position)
    {
        positionX =  - position.x;
        positionY =  - position.y + 180;
    };
    
    this.rafraichir = function()
    {
        mapConteneur.position.x = positionX;
        mapConteneur.position.y = positionY;
    }
    
    this.detruirePiece = function(sprite)
    {
        mapConteneur.removeChild(sprite);
        tabSpritePiece.splice(sprite);
    }
};

CombatArenaMap.Configuration = 
{
    image:
    {
        arrierPlan : "combat-arena-arrier-plan.png",
        mondeObj : 
        {
            image : "combat-arena-monde-obj.png",
            sol01 :
            {
                posX : 0,
                posY : 24,
                hauteur : 57,
                largeur : 319
            }
        }
    },
    piece :
    {
        frame01 : 
        {
            positionX : 330,
            positionY : 0,
            hauteur : 80,
            largeur : 50,
        }
    },
    positionX : 0,
    positionY : 0,
    tailleYimage : 1411,
    tailleXimage : 3784,
    hauteurPalier : 250
}