define("lession1", ["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    exports.__esModule = true;
    var observable$ = new rxjs_1.Observable(function (subscriber) {
        console.log("observable is executed");
        subscriber.next("tashi");
        subscriber.next("rao");
    });
    observable$.subscribe(function (value) { return console.log(value); });
});
