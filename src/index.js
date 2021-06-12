define("lesson4", ["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    exports.__esModule = true;
    rxjs_1.from(["hi", "am", "tashfenn"]).subscribe({
        next: function (value) { return console.log(value); },
        complete: function () { return console.log("completed"); }
    });
    var promiseObj = new Promise(function (resolve, reject) {
        return resolve("resolved :)");
    });
    var promiseObj2 = new Promise(function (resolve, reject) {
        return reject("rejected :(");
    });
    var observable$ = rxjs_1.from(promiseObj);
    var observable2$ = rxjs_1.from(promiseObj2);
    observable$.subscribe({
        next: function (value) { return console.log(value); },
        error: function (err) { return console.log(err); },
        complete: function () { return console.log("completed"); }
    });
    observable2$.subscribe({
        next: function (value) { return console.log(value); },
        error: function (err) { return console.log(err); },
        complete: function () { return console.log("Completed"); }
    });
});
