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
    var subscription = observable$.subscribe(function (value) { return console.log(value); });
    setTimeout(function () {
        subscription.unsubscribe();
        console.log("unsubscribed");
    }, 3000);
});
