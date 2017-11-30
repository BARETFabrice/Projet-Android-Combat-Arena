const InscriptionVue = function()
{
    function initialiser()
    {
        document.querySelector("body").innerHTML = Page.pageInscription;
		document.getElementById("formulaire-inscription").addEventListener("submit", function(evenement){
			alert("Inscription faite!");
			evenement.preventDefault();
			var nom = document.getElementById("nom").value;
			var motDePasse = md5(document.getElementById("mot-de-passe").value);
			var age = document.getElementById("age").value;
			var couleurLogo = document.getElementById("couleur-logo").value;
			var volume = document.getElementById("volume").value;
			alert(motDePasse);
			window.location.hash = "#";
		});
    }
    initialiser();
};


