const InscriptionVue = function()
{
    this.initialiser=function()
    {
        document.body.innerHTML = Page.pageInscription;
		document.getElementById("formulaire-inscription").addEventListener("submit", function(evenement){
			
			evenement.preventDefault();
			
			
			var nom = document.getElementById("nom").value;
			var motDePasse = md5(document.getElementById("mot-de-passe").value);
			var age = document.getElementById("age").value;
			var couleurLogo = document.getElementById("couleur-logo").value;
			var volume = document.getElementById("volume").value;
			var courriel = document.getElementById("courriel").value;
			
			ServeurPhp.inscription(nom,motDePasse,age,couleurLogo,volume, courriel);
			
			window.location.hash = "#";
		});
    }
};


