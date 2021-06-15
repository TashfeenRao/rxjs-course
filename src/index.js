define("timer", ["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    exports.__esModule = true;
    var sub2 = rxjs_1.timer(2000).subscribe({
        next: function (value) { return console.log(value); },
        complete: function () { return console.log("completed!"); }
    });
    setTimeout(function () {
        sub2.unsubscribe();
    }, 1000);
    var ourTimer$ = new rxjs_1.Observable(function (subscriber) {
        var timeId = setTimeout(function () {
            console.log("memory leak?");
            subscriber.next(0);
            subscriber.complete();
        }, 2000);
        return function () {
            clearTimeout(timeId);
        };
    });
    var sub1 = ourTimer$.subscribe({
        next: function (value) { return console.log(value); },
        complete: function () { return console.log("Completed!"); }
    });
    setTimeout(function () {
        sub1.unsubscribe();
    }, 1000);
});
