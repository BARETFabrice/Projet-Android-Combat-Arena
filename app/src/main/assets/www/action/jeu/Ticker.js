const Ticker = (function()
{
	const GAME_TICK = 16;
	const INTERVAL_MIN = 4;

	//etats
	var started = false;
	var empty = true;

	//temps	
	var lastUpdate;
	var loop;

	//updates
	var rawUpdates = [];
	var normalizedUpdates = [];

	//fps
	var fpsStarted=false;
	var totalTickCount=0;
	var tickCount;
	var firstFpsCount;
	var lastFpsCount;
	var fpsLoop;

	function countFps()
	{
		var now = Date.now();

		console.log("FPS: ", 1000*tickCount / (now - lastFpsCount)/* ,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"*/);
		
		totalTickCount += tickCount;
		lastFpsCount = now;
		tickCount = 0;
	}

	function tick()
	{
		if (fpsStarted)
			tickCount++;	
		
		if (!empty)
		{
			update();
		}
	}

	function update()
	{
		var now = Date.now();
		var deltaTime = now - lastUpdate;
		lastUpdate = now;

		while (deltaTime > 0) {

			var updateValue;

			if (deltaTime > GAME_TICK)
			{
				updateValue = 1;
				deltaTime -= GAME_TICK;
			}
			else
			{
				updateValue = deltaTime / GAME_TICK;
				deltaTime = 0;
			}

			if (updateValue !== false)
				normalizedUpdate(updateValue);
		}
		rawUpdate();
	}

	function rawUpdate()
	{
		for (var u of rawUpdates)
			u();	
	}

	function normalizedUpdate(value)
	{
		for (var u of normalizedUpdates)
			u(value);
	}

	function testEmpty()
	{
		empty = (rawUpdates.length === 0 && normalizedUpdates.length === 0);
	}

	return {
		start: function()
		{
			if (!started) {
				started = true;
				lastUpdate = Date.now();
				loop = setInterval(tick, INTERVAL_MIN);
			}
		},

		pause: function()
		{
			clearInterval(loop);
			started = false;
		},

		stop: function()
		{
			rawUpdates = [];
			normalizedUpdates = [];
			empty = true;
			
			clearInterval(loop);
			started = false;
		},

		addRaw: function(u)
		{
			rawUpdates.push(u);
			empty = false;
		},

		addNormalized: function(u)
		{
			normalizedUpdates.push(u);
			empty = false;
		},

		removeRaw: function(u)
		{
			for (var i in rawUpdates)
				if (rawUpdates[i] == u)
				{
					rawUpdates.splice(i, 1);
					testEmpty();
					return true;
				}	
			return false;
		},

		removeNormalized: function(u)
		{
			for(var i in normalizedUpdates)
				if (normalizedUpdates[i] == u)
				{
					normalizedUpdates.splice(i, 1);
					testEmpty();
					return true;
				}
			return false;
		},

		removeAll: function()
		{
			rawUpdates = [];
			normalizedUpdates = [];
			empty = true;
		},

		once: function(u)
		{
			var f = function(){
				u();
				for (var i in rawUpdates)
				if (rawUpdates[i] == u)
				{
					rawUpdates.splice(i, 1);
					testEmpty();
				}
			}
			rawUpdates.push(f);
			empty = false;
		},

		startFps: function(time)
		{
			fpsStarted = true;
			tickCount = 0;

			var now = Date.now();
			lastFpsCount = now;
			
			if(totalTickCount===0)
				firstFpsCount = now;
			
			fpsLoop = setInterval(countFps, time);
		},

		getAverageFPS: function()
		{
			if(fpsStarted)
				console.log("average FPS: ", 1000*totalTickCount / (Date.now() - firstFpsCount) );
		},
	};
})();