define("lesson3", ["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    exports.__esModule = true;
    function ourOf() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new rxjs_1.Observable(function (subscriber) {
            for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
                var iterator = args_1[_i];
                subscriber.next(iterator);
            }
            subscriber.complete();
        });
    }
    ourOf("hiii", "hello", "bye").subscribe({
        next: function (value) { return console.log(value); },
        complete: function () { return console.log("completed"); }
    });
});
