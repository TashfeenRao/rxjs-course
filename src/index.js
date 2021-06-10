define("excersise1", ["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    exports.__esModule = true;
    var observable$ = new rxjs_1.Observable(function (subscriber) {
        var timeout = 0;
        console.log("observable executed");
        var intervelId = setInterval(function () {
            console.log("emmited value", timeout);
            subscriber.next(timeout++);
        }, 1000);
        return function () {
            console.log("tear down logic");
            clearInterval(intervelId);
        };
    });
    var subscription = observable$.subscribe({
        next: function (value) { return console.log(value); },
        error: function (err) { return console.error(err.message); },
        complete: function () { return console.log("completed"); }
    });
    setTimeout(function () {
        subscription.unsubscribe();
        console.log("Unsubscribed");
    }, 7000);
});
