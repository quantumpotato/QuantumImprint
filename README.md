QuantumImprint #PROCJAM #PROCJAM2014
==============

Record game actions, play them back!

Dynamic record/playback implementation of the cloning mechanics I used in Quantum Pliot [ https://itunes.apple.com/app/id935956154 ], inspired by Kenta Cho's DefeatMe. Use this library to record game events and play them back later, like when making clones that imitate a player.

Sample implementation in imprint.html records the player's cursor position & color each frame. When the player clicks, the program begins playback, painting the same position & color where the player drew.

HOW TO:

1. Include Script:
   <script type="text/javascript" src="imprint.js"></script>

2. Create your Imprintable:
   var mouseInfo = {"category" : "painter"}; //set the info hash to useful meta-data for playback
   createImprintable("mouse", mouseInfo);

3. Record Actions:
   imprint("mouse", {"x" : mouse.x, "y" : mouse.y, "color" : currentColor, "radius" : 5});

4. Create a Record from your Imprint:
   createRecordFromImprint("mouse");

5. Implement playback function called by imprint.js:
   function playbackRecordedImprint(info, actions, timeIndex, timeDirection) {
 		if (info["category"] === "painter") {
 		  doMyGameUpdateFunction(actions);
		}	 else {
		  doGameUpdateFunctionForNonPainters(actions); //use the info hash however you want
		}
	}
}

6. Playback Records:
    playbackRecords(); //iterates through records playbackRecordedImprint(info, actions, timeIndex, timeDirection) {

7. Rewind, recompile, relive.