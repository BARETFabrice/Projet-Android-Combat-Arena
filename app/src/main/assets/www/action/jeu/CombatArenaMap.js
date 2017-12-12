var CombatArenaMap = function(pixiApp)
{
    var mapConteneur;
    var mapTexture;
    var map;
    var pixiApp = pixiApp;
    
    function initialiser()
    {
        mapConteneur = new PIXI.Container();
        
        //console.log("height scene" + pixiApp.view.height);
        //console.log("width scene" + pixiApp.view.width);
        
        var positionY = -(CombatArenaMap.Configuration.tailleYimage) + pixiApp.view.height;
        
        var someImage = new Image();
        someImage.src = Configuration.cheminImage + CombatArenaMap.Configuration.image;
        someImage.onload = function()
        {
            mapTexture = new PIXI.Texture(new PIXI.BaseTexture(someImage));
            
            map = new PIXI.Sprite(mapTexture);
            map.position.x = CombatArenaMap.Configuration.positionX;
            map.position.y = CombatArenaMap.Configuration.positionY;
            
            mapConteneur.position.x = CombatArenaMap.Configuration.positionX;
            mapConteneur.position.y = positionY;
            
            mapConteneur.addChild(map);
            pixiApp.stage.addChild(mapConteneur);
            
            console.log("dispatchEvent(Evenement.finChargementSpriteCombatArenaMap);");
            dispatchEvent(Evenement.finChargementSpriteCombatArenaMap);
        }
    }
    
    initialiser();
    
    this.getMapConteneur = function()
    {
        return mapConteneur;
    }
};

CombatArenaMap.Configuration = 
{
    image: "combat-arena-map.png",
    positionX : 0,
    positionY : 0,
    tailleYimage : 7640,
    tailleXimage : 4320
}