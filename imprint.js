var imprintables = {};
var records = [];

function createImprintable(key, info) {
	var imprintHash = {"info" : info, "actions" : []};
	imprintables[key] = imprintHash;
}

function createRecord(key, info, actions) {
	info["key"] = key;
	var recordHash = {"info" : info, "actions" : actions, "timeIndex": 0, "timeDirection" : 1};
	records.push(recordHash);
}

function createRecordFromImprint(key) {
		var imprintedRecord = imprintables[key];
		createRecord(key, imprintedRecord["info"], imprintedRecord["actions"]);
		imprintedRecord["actions"] = [];
}

function imprint(key, actions) {
	var imprintHash = imprintables[key];
	var imprintedActions = imprintHash["actions"];
	imprintedActions.push(actions)
}

function playbackRecords() {
	for (var i = 0; i < records.length; i++) {
		var recordHash = records[i];
		playbackRecordedImprint(recordHash["info"], recordHash["actions"][recordHash["timeIndex"]], recordHash["timeIndex"], recordHash["timeDirection"]);
		recordHash["timeIndex"] = recordHash["timeIndex"] + recordHash["timeDirection"];
		if (recordHash["timeIndex"] > recordHash["actions"].length - 1) {
			recordHash["timeIndex"] = recordHash["actions"].length - 1;
			recordHash["timeDirection"] = -1;
		} else if (recordHash["timeIndex"] < 0) {
			recordHash["timeIndex"] = 0
			recordHash["timeDirection"] = 1;
		}
	}
}