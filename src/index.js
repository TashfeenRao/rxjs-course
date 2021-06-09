define("lession1", ["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    exports.__esModule = true;
    var observable$ = new rxjs_1.Observable(function (subscriber) {
        console.log("observable is executed");
        setTimeout(function () {
            subscriber.next("tashi");
        }, 2000);
        setTimeout(function () {
            subscriber.next("Rao");
        }, 4000);
    });
    console.log("subscription 1 has started");
    observable$.subscribe(function (value) { return console.log("subscription: 1", value); });
    setTimeout(function () {
        console.log("subscription 2 has started");
        observable$.subscribe(function (value) { return console.log("subscription: 2", value); });
    }, 0);
    setTimeout(function () {
        console.log("subscription 3 has started");
        observable$.subscribe(function (value) { return console.log("subscription: 3", value); });
    }, 0);
});
