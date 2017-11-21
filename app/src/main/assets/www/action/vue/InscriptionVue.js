const InscriptionVue = function()
{
    function initialiser()
    {
        document.querySelector("body").innerHTML = Page.pageInscription;
		document.getElementById("formulaire-inscription").addEventListener("submit", function(evenement){
			alert("Inscription faite!");
			evenement.preventDefault();
			//Encrypter mot de passe
			//Envoyer au service web
			//	si c'est bon --> Localstore updateCommands
			//	si ce n'est pas bon --> retour à la page inscription avec alert
			window.location.hash = "#";
		});
    }
    initialiser();
};


