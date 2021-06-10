define("lesson2", ["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    exports.__esModule = true;
    var onservable$ = new rxjs_1.Observable(function (subscriber) {
        console.log("observable is executed");
        subscriber.next("Tahfeen");
        subscriber.next("Rao");
        setTimeout(function () {
            subscriber.next("Is learning the rxjs");
        }, 1000);
        setTimeout(function () {
            subscriber.next("I am enjoying to learn");
        }, 3000);
    });
    console.log("before subscription");
    onservable$.subscribe(function (value) { return console.log(value); });
    console.log("After subscription");
});
