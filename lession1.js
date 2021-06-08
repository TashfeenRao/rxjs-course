define(["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    exports.__esModule = true;
    var observable$ = new rxjs_1.Observable(function (subscriber) {
        console.log("observable is executed");
        subscriber.next("tahfeen rao");
        subscriber.next("talha");
        subscriber.next("umair");
    });
    observable$.subscribe(function (value) { return console.log(value); });
});
