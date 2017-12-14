var CombatArenaJoueur = function(combatArenaMap)
{
    this.pointDeVie = 100;
    this.nombreDePiece = 0;
    this.nombreDeChute = 0;
    
    var joueurConteneur;
    var joueurTexture;
    var joueurSprite;
    var combatArenaMap = combatArenaMap;
    var positionX;
    var positionY;
    var isJoueurEnChuteLibre = true;
    
    function initialiser()
    {
        joueurConteneur = new PIXI.Container();
        
        joueurTexture = PIXI.Texture.fromImage(Configuration.cheminImage + CombatArenaJoueur.Configuration.image.image);
        
        joueurSprite = new PIXI.Sprite(joueurTexture);
        joueurSprite.position.x = CombatArenaJoueur.Configuration.image.positionX;
        joueurSprite.position.y = CombatArenaJoueur.Configuration.image.positionX;
        
        positionX = CombatArenaJoueur.Configuration.positionX;
        positionY = CombatArenaJoueur.Configuration.positionY;
        
        //console.log("height carte " + combatArenaMap.height);
        //console.log("width carte " + combatArenaMap.width);
        
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
    };
    
    this.deplacementAGauche = function()
    {
         positionX -= CombatArenaJoueur.Configuration.vitesseDeDeplacement;
    };
    
    this.faireUnSaut = function()
    {
        positionY -= CombatArenaJoueur.Configuration.pousseeSaut;
    };
    
    this.setJoueurEnChuteLibre = function(Boolean)
    {
        isJoueurEnChuteLibre = Boolean;
    };
    
    this.rafraichir = function()
    {
        joueurConteneur.x = positionX;
        joueurConteneur.y = positionY;
        
        if(isJoueurEnChuteLibre)
        {
            positionY -= CombatArenaJoueur.Configuration.vitesseDeChute;
        }
    };
    
    this.getPositionJoueur = function()
    {
        return {
            x : positionX,
            y : positionY
        };
    };
    
    this.resetPositionJoueur = function()
    {
        positionX = CombatArenaJoueur.Configuration.positionX;
        positionY = CombatArenaJoueur.Configuration.positionY;
        
        this.pointDeVie -= CombatArenaJoueur.Configuration.degatChute;
        this.nombreDeChute++;
    }
    
    this.isCollisionAvecLeFondDeMap = function()
    {
        if(positionY > (CombatArenaMap.Configuration.tailleYimage + 100)) return true;
        
        return false;
    }
    
    this.isCollisionAvecSol = function(sprite)
    {
        if(colision(sprite, joueurConteneur)) return true;
        
        return false;
    };
    
    function colision(r1, r2)
    {
        return !(r2.x > (r1.x + r1.width) || 

           (r2.x + r2.width) < r1.x || 

           r2.y > (r1.y + r1.height) ||

           (r2.y + r2.height) < r1.y);
    }
};

CombatArenaJoueur.Configuration = 
{
    image:
    {
        image: "bunny.png",
        positionX : 0,
        positionY : 0
    },
    positionX : 0,
    positionY : 1211,
    vitesseDeDeplacement : 12,
    vitesseDeChute : -15,
    pousseeSaut : 30,
    degatChute : 25
}