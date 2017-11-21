var CombatArena = function()
{
    function initialiser()
    {
        //console.log("lancement du jeu");
        
        var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
        document.body.appendChild(app.view);

        var bunny = PIXI.Sprite.fromImage('asset/image/bunny.png');

        bunny.anchor.set(0.5);

        bunny.x = app.renderer.width / 2;
        bunny.y = app.renderer.height / 2;

        app.stage.addChild(bunny);

        app.ticker.add(function(delta) {
            bunny.rotation += 0.1 * delta;
        });
    }
    
    initialiser();
};