define("forkJoin", ["require", "exports", "rxjs", "rxjs/ajax"], function (require, exports, rxjs_1, ajax_1) {
    "use strict";
    exports.__esModule = true;
    var randomNames$ = ajax_1.ajax("https://random-data-api.com/api/name/random_name");
    var randomNation$ = ajax_1.ajax("https://random-data-api.com/api/nation/random_nation");
    var randomFood$ = ajax_1.ajax("https://random-data-api.com/api/food/random_food");
    var a$ = new rxjs_1.Observable(function (subscriber) {
        setTimeout(function () {
            subscriber.next("a");
            subscriber.complete();
        }, 5000);
        return function () {
            console.log("a terminated");
        };
    });
    var b$ = new rxjs_1.Observable(function (subscriber) {
        setTimeout(function () {
            subscriber.error("some thing wrong happened");
        }, 3000);
        return function () {
            console.log("b terminated");
        };
    });
    rxjs_1.forkJoin([a$, b$]).subscribe({
        next: function (value) { return console.log(value); },
        error: function (error) { return console.log(error); },
        complete: function () { return console.log("completed"); }
    });
});
