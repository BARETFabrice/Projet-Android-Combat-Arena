var CombatArena = function()
{
    var app;
    var combatArenaMap;
    var combatArenaJoueur;
    var combatArenaCommande;
    var test = false;
    var isFinPartie = false;
    var chronoText;
    var chrono = 0;
    var isDecompteTerminer = false;
    var compteurDecompteText;
    var pointDeVieJoueurText;
    var nombreDePieceJoueurText;
    var isVistoire = false;
    var statutPartieText;
    var textStatue;
    
    var ticker;
    
    function initialiser()
    {
        //console.log("innerHeight " + window.innerHeight);
        //console.log("innerWidth " + window.innerWidth);
        
        app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor : 0x1099bb});
        document.body.appendChild(app.view);
        
        //console.log(app.view.height);
        //console.log(app.view.width);
        
        document.querySelector("canvas").style.position = "absolute";
        document.querySelector("canvas").style.top = 0;
        document.querySelector("canvas").style.left = 0;
        
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
        if(!isDecompteTerminer)
        {
            initialiserCompteurDecompteText();
            return;
        }
        
        detruireCompteurDecompteText();

        initialiserChronoTextPartie();
        initialiserPointDeVieJoueurText();
        initialiserNombreDePieceJoueurText();

        combatArenaCommande = new CombatArenaCommande(app);

        ticker = new PIXI.ticker.Ticker();
        ticker.stop();
        ticker.add(rafraichir);
        ticker.start();

        //deactiver event
		removeEventListener(Evenement.finChargementSpriteCombatArenaMap.type, chargementDesJoueur);
        removeEventListener(Evenement.finChargementCombatArena.type, commencerCombatArena);
    }
    
    function initialiserCompteurDecompteText()
    {
        var compteurDecompte = 3;
        compteurDecompteText = new PIXI.Text('' + compteurDecompte, {
            fontStyle: 'italic',
            fontSize: 60,
            fontFamily: 'Arvo',
            fill: '#3e1707',
            align: 'center',
            stroke: '#a4410e',
            strokeThickness: 7
        });

        compteurDecompteText.x = app.renderer.width / 2;
        compteurDecompteText.y = app.renderer.height / 2;
        compteurDecompteText.anchor.x = 0.5;

        app.stage.addChild(compteurDecompteText);

        var montimer = window.setInterval(function(){
            compteurDecompte--;
            compteurDecompteText.text = '' + compteurDecompte;

            if(compteurDecompte == 0)
            {
                //console.log("fin decompte")
                window.clearInterval(montimer);
                isDecompteTerminer = true;

                commencerCombatArena();
            }
        },1000);
    }
    
    function detruireCompteurDecompteText()
    {
        app.stage.removeChild(compteurDecompteText);
    }
    
    function initialiserChronoTextPartie()
    {
        chronoText = new PIXI.Text('chrono:' + chrono, {
            fontStyle: 'italic',
            fontSize: 60,
            fontFamily: 'Arvo',
            fill: '#3e1707',
            align: 'center',
            stroke: '#a4410e',
            strokeThickness: 7
        });

        chronoText.x = app.renderer.width - 15;
        chronoText.y = 15;
        chronoText.anchor.x = 1;

        app.stage.addChild(chronoText);
        
        var montimer = window.setInterval(function(){
            chrono+=10;
            chronoText.text = 'chrono : ' + Math.floor(chrono/1000);
        },10);
    }
    
    function initialiserPointDeVieJoueurText()
    {
        pointDeVieJoueurText = new PIXI.Text('Vie: ' + combatArenaJoueur.pointDeVie, {
            fontStyle: 'italic',
            fontSize: 60,
            fontFamily: 'Arvo',
            fill: '#3e1707',
            align: 'center',
            stroke: '#a4410e',
            strokeThickness: 7
        });

        pointDeVieJoueurText.x = 15;
        pointDeVieJoueurText.y = 15;
        pointDeVieJoueurText.anchor.x = 0;

        app.stage.addChild(pointDeVieJoueurText);
    }
    
    function initialiserNombreDePieceJoueurText()
    {
        nombreDePieceJoueurText = new PIXI.Text('Nb Piece: ' + combatArenaJoueur.nombreDePiece, {
            fontStyle: 'italic',
            fontSize: 60,
            fontFamily: 'Arvo',
            fill: '#3e1707',
            align: 'center',
            stroke: '#a4410e',
            strokeThickness: 7
        });

        nombreDePieceJoueurText.x = 15;
        nombreDePieceJoueurText.y = 65;
        nombreDePieceJoueurText.anchor.x = 0;

        app.stage.addChild(nombreDePieceJoueurText);
    }
    
    function detruireAffichageStatJoueur()
    {
        app.stage.removeChild(nombreDePieceJoueurText);
        app.stage.removeChild(pointDeVieJoueurText);
        app.stage.removeChild(chronoText);
    }
    
    function rafraichirStatJoueur()
    {
        pointDeVieJoueurText.text = 'Vie: ' + combatArenaJoueur.pointDeVie;
        nombreDePieceJoueurText.text = 'Nb Piece: ' + combatArenaJoueur.nombreDePiece;
    }
    
    function afficherstatutPartieText()
    {
        if(isVistoire) textStatue = "Vous avez gagne!!!";
        else textStatue = "Vous avez perdu.";
        
        statutPartieText = new PIXI.Text(textStatue, {
            fontStyle: 'italic',
            fontSize: 60,
            fontFamily: 'Arvo',
            fill: '#3e1707',
            align: 'center',
            stroke: '#a4410e',
            strokeThickness: 7
        });

        statutPartieText.x = app.renderer.width / 2;
        statutPartieText.y = app.renderer.height / 2;
        statutPartieText.anchor.x = 0.5;

        app.stage.addChild(statutPartieText);
    }
    
    function rafraichir(deltaTime)
    {
        if(combatArenaJoueur.nombreDePiece >= CombatArena.Configuration.pointDeVictoire)
        {
            isVistoire = true;
            isFinPartie = true;
        }
        else if(combatArenaJoueur.pointDeVie <= CombatArena.Configuration.vieMort)
        {
            isFinPartie = true;
            isVistoire = false;
        }
        
        if(isFinPartie)
        {
            ticker.stop();
            
            detruireAffichageStatJoueur();
            afficherstatutPartieText();
            
            setTimeout(function(){
                window.location.hash="#fin-partie";
                return;
            }, 3000);
            //console.log("chrono: " + chrono + ", pieceRamasser: " + combatArenaJoueur.nombreDePiece + ", nbChute" + combatArenaJoueur.nombreDeChute);
        }
        
        rafraichirStatJoueur();
        
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
        
        (combatArenaMap.getTabSpritePiece()).forEach(function(sprite){
            if(combatArenaJoueur.isCollisionAvecPiece(sprite))
            {
                //console.log("piece");
                combatArenaJoueur.nombreDePiece++;
                combatArenaMap.detruirePiece(sprite);
            }
        });
        
        
        
        if(combatArenaJoueur.isCollisionAvecLeFondDeMap())
        {
            combatArenaJoueur.resetPositionJoueur();
        }
        
        if(combatArenaCommande.isActionSurFlecheDroite())
        {
            combatArenaJoueur.deplacementADroite();
        }
        else if(combatArenaCommande.isActionSurFlecheGauche())
        {
            combatArenaJoueur.deplacementAGauche();
        }
        
        if(combatArenaCommande.isActionSurFlecheHaut())
        {
            combatArenaJoueur.faireUnSaut();
        }
        
        combatArenaJoueur.rafraichir();
        
        combatArenaMap.deplacerMondeVersPosition(combatArenaJoueur.getPositionJoueur());
        
        combatArenaMap.rafraichir();
    }
    
    this.getNombreDeChute = function()
    {
        return combatArenaJoueur.nombreDeChute;
    }
    
    this.getNombreDePieceRammasser = function()
    {
        return combatArenaJoueur.nombreDePiece;
    }
    
    this.getChrono = function()
    {
        return chrono;
    }
    
    this.isVictoire =  function()
    {
        return isVistoire;
    }
};

CombatArena.Configuration =
{
    cheminImage: "asset/image/",
    pointDeVictoire : 50,
    vieMort : 0
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
