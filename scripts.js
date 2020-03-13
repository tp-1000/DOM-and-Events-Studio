// Write your JavaScript code here.
// Remember to pay attention to page loading!
// (function() {
//         const takeOff = document.getElementById("takeoff");
//         window.alert(takeOff);
//         takeOff.addEventListener("click", function() {
//             window.confirm("does this work?");
//         })

// })();

window.addEventListener("load", function () {
    const flightStatus = document.getElementById("flightStatus");  
    const flightScreen = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");

    const takeOff = document.getElementById("takeoff");
    const land = document.getElementById("landing");
    const abort = document.getElementById("missionAbort")


    const shuttle = document.querySelector('#rocket');
    const down = document.querySelector('#down');
    const right = document.querySelector('#right');
    const left = document.querySelector('#left');
    const up = document.querySelector('#up');
    let topPos = 0;
    let leftPos = 0;

    takeOff.addEventListener("click", function() {
            window.alert("Confirm that the shuttle is ready for takeoff.");
            flightStatus.innerHTML = "Shuttle in flight";
            flightScreen.style.background = "blue";
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        });
    land.addEventListener("click", function () {
            window.alert("The shuttle is landing. Landing gear engaged.");
            flightStatus.innerHTML = "The shuttle has landed.";
            flightScreen.style.background = "green";
            shuttleHeight.innerHTML = "0";
            shuttle.style.left = "0px";
            shuttle.style.top = "0px";

        });
    abort.addEventListener("click", function () {
            window.confirm("Confirm that you want to abort the mission." );
            flightStatus.innerHTML = "Mission aborted";
            flightScreen.style.background = "green";
            shuttleHeight.innerHTML = "0";
            shuttle.style.left = "0px";
            shuttle.style.top = "0px";

        });


    up.addEventListener("click", function () {
        if(topPos>0) {
            topPos -= 10;
            shuttle.style.top = `${topPos}px`;
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        };
    })
    down.addEventListener("click", function () {
        if(topPos<250) {
            topPos += 10;
            shuttle.style.top = `${topPos}px`;
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
        };
    })
    left.addEventListener("click", function () {
        if(leftPos > -230) {
            leftPos -= 10;
            shuttle.style.left = `${leftPos}px`;
        };
    })
    right.addEventListener("click", function () {
        if(leftPos < 230) {
            leftPos += 10;
            shuttle.style.left = `${leftPos}px`;
        };
    })

});