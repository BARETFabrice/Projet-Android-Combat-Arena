const Sons = (function()
{
	const PATH = Data.chemin_son;
	
	var soundList = Data.son;

	var loadedSounds = {};

	var playingSounds = [];
	var playingMusic = null;

	var loadHowlSound = function(id)
	{
		loadedSounds[id]= new Howl({
			src: [PATH + soundList[id]]
		});
	};
	
	return{
		loadAll: function()
		{
			for (var id in soundList)
				loadHowlSound(id);
		},

		load: function(id)
		{
			loadHowlSound(id);
		},

		playSound: function(id)
		{
			if (!loadedSounds[id])
				loadHowlSound(id);
			
			loadedSounds[id].play();
			playingSounds.push(loadedSounds[id]);			
			loadedSounds[id].once("end",function(i){ playingSounds.splice(playingSounds.indexOf(loadedSounds[id]),1); });
		},

		playMusic: function(id)
		{
			if (!loadedSounds[id])
				loadHowlSound(id);

			if(playingMusic !== null)
			{
				playingMusic.stop();
			}
			
			loadedSounds[id].loop(true);
			loadedSounds[id].play();
			playingMusic = loadedSounds[id];
		},

		/*setPauseMusic: function(pause)
		{
			if(!pause)
				playingMusic.play();
			else
				playingMusic.pause();
		},

		setPauseSounds: function(pause)
		{
			if(!pause)
				playingSounds.forEach(function(sound){sound.play();});
			else
				playingSounds.forEach(function(sound){sound.pause();});
		},*/

		setMute: function(muted)
		{
			Howler.mute(muted);
		},

		setVolume: function(volume)
		{
			Howler.volume(volume);
		}
    };
})();