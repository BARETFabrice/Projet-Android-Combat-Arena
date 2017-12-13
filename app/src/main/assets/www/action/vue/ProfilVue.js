const ProfilVue = function()
{
    this.initialiser=function()
    {
        document.querySelector("body").innerHTML = Page.pageProfil;
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


