function couleurOpposee(couleur){
	couleur.toUpperCase()
	
	if(!new RegExp(/^#(?:[0-9a-fA-F]{3}){1,2}$/).test(couleur)) return null;
	
	var value={
		0:0,
		1:1,
		2:2,
		3:3,
		4:4,
		5:5,
		6:6,
		7:7,
		8:8,
		9:9,
		A:10,
		B:11,
		C:12,
		D:13,
		E:14,
		F:15
	}
	
	var reverseValue={
		0:0,
		1:1,
		2:2,
		3:3,
		4:4,
		5:5,
		6:6,
		7:7,
		8:8,
		9:9,
		10:'A',
		11:'B',
		12:'C',
		13:'D',
		14:'E',
		15:'F'
	}
	
	var rouge = ""+couleur[1]+couleur[2];
	var vert = ""+couleur[3]+couleur[4];
	var bleu = ""+couleur[5]+couleur[6];
	
	var rougeValue=16*value[rouge[0]]+value[rouge[1]];
	var vertValue=16*value[vert[0]]+value[vert[1]];
	var bleuValue=16*value[bleu[0]]+value[bleu[1]];
	
	var rougeReverse=255-rougeValue;
	var vertReverse=255-vertValue;
	var bleuReverse=255-bleuValue;
	
	var couleurReverse="#";
	
	couleurReverse+=reverseValue[Math.floor(rougeReverse/16)];
	couleurReverse+=reverseValue[(rougeReverse%16)];
	couleurReverse+=reverseValue[Math.floor(vertReverse/16)];
	couleurReverse+=reverseValue[(vertReverse%16)];
	couleurReverse+=reverseValue[Math.floor(bleuReverse/16)];
	couleurReverse+=reverseValue[(bleuReverse%16)];
	
	return couleurReverse;
}