const AccueilVue={
	
    initialiser:function(){
        document.body.innerHTML = Page.pageAccueil;
		
		if(Data.joueur.id){
			document.getElementById("page-accueil-avant").innerHTML="";
		}
		else{
			document.getElementById("page-accueil-apres").innerHTML="";
		}
    }
};