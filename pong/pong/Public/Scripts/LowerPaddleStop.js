// -----JS CODE-----

function stop(eventData) {

function LowerPaddleStop(eventData) {
    var pos = transform.getLocalPosition();
    transform.setLocalPosition(pos);
}

// Store the Scene Object's transform
var transform = self.script.getTransform();

// Bind the function moveObject to the event UpdateEvent
// var event = self.script.createEvent("UpdateEvent");
// event.bind(LowerPaddleStop);

}

var ev = self.script.createEvent("BrowsWereJustReturnedToNormalEvent");
ev.bind(stop);
