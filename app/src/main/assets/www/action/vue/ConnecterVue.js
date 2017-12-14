const ConnecterVue = function()
{
    this.initialiser=function()
    {
        document.body.innerHTML = Page.pageConnecter;
		document.getElementById("formulaire-connecter").addEventListener("submit", function(evenement){
			
			evenement.preventDefault();
			
			
			var nom = document.getElementById("nom").value;
			var motDePasse = md5(document.getElementById("mot-de-passe").value);
			
			ServeurPhp.connexion(nom,motDePasse);
			
			window.location.hash = "#";
		});
    }
};


