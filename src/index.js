define("lesson5", ["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    exports.__esModule = true;
    var btn = document.querySelector("button#clickme");
    rxjs_1.fromEvent(btn, "click").subscribe(function (event) { return console.log(event); });
});
