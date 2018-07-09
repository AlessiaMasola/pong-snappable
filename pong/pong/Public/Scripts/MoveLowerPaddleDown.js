// -----JS CODE-----
//@input float paddleSpeed = 30.0 {"widget": "slider", "min": 0, "max": 150.0, "step": 0.01}

function func(eventData){

function moveLowerPaddleDown(eventData) {
    var pos = transform.getLocalPosition();
    var screenLeftEdge = -4.80;

    if (pos.x >= screenLeftEdge) {
        pos.x -= eventData.getDeltaTime() * script.paddleSpeed;
        transform.setLocalPosition(pos);
    }
}

// Store the Scene Object's transform
var transform = self.script.getTransform();

// Bind the function moveObject to the event UpdateEvent
var event = self.script.createEvent("UpdateEvent");
event.bind(moveLowerPaddleDown);

}

var ev = self.script.createEvent("BrowsWereJustFrownedEvent");
ev.bind(func);
