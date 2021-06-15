define("timer", ["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    exports.__esModule = true;
    var sub2 = rxjs_1.timer(2000).subscribe({});
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
    var sub1 = ourTimer$.subscribe({});
    setTimeout(function () {
        sub1.unsubscribe();
    }, 1000);
    var sub3 = rxjs_1.interval(1000).subscribe({});
    setTimeout(function () {
        sub3.unsubscribe();
    }, 5000);
    var ourInterval$ = new rxjs_1.Observable(function (subscriber) {
        var counter = 0;
        var timeId = setInterval(function () {
            console.log("memory leak?");
            subscriber.next(++counter);
        }, 1000);
        return function () {
            clearInterval(timeId);
        };
    });
    var sub4 = ourInterval$.subscribe({
        next: function (value) { return console.log(value); }
    });
    setTimeout(function () {
        sub4.unsubscribe();
        console.log("unsubscribed");
    }, 5000);
});
