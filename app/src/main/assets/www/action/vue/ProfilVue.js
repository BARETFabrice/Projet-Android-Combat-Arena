const ProfilVue = function()
{
    this.initialiser=function()
    {
        document.querySelector("body").innerHTML = Page.pageProfil;
		
		document.getElementById("nom").value=Data.joueur.nom;
		document.getElementById("age").value=Data.joueur.age;
		document.getElementById("couleur-logo").value=Data.joueur.couleur_logo;
		document.getElementById("volume").value=Data.joueur.volumeSon;
		document.getElementById("courriel").value=Data.joueur.courriel;
		
		document.getElementById("formulaire-profil").addEventListener("submit", function(evenement){
			
			evenement.preventDefault();
			
			
			var nom = document.getElementById("nom").value;
			var age = document.getElementById("age").value;
			var couleurLogo = document.getElementById("couleur-logo").value;
			var volume = document.getElementById("volume").value;
			var courriel = document.getElementById("courriel").value;
			
			ServeurPhp.modifierProfil(nom,age,couleurLogo,volume, courriel);
			
			window.location.hash = "#";
		});
    }
};


