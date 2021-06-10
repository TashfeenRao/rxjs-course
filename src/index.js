define("lesson2", ["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    exports.__esModule = true;
    var onservable$ = new rxjs_1.Observable(function (subscriber) {
        console.log("observable is executed");
        subscriber.next("Tahfeen");
    });
    console.log("before subscription");
    onservable$.subscribe(function (value) { return console.log(value); });
    console.log("After subscription");
});
