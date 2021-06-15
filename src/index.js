define("forkJoin", ["require", "exports", "rxjs", "rxjs/ajax"], function (require, exports, rxjs_1, ajax_1) {
    "use strict";
    exports.__esModule = true;
    var randomNames$ = ajax_1.ajax("https://random-data-api.com/api/name/random_name");
    var randomNation$ = ajax_1.ajax("https://random-data-api.com/api/nation/random_nation");
    var randomFood$ = ajax_1.ajax("https://random-data-api.com/api/food/random_food");
    randomNames$.subscribe(function (value) { return console.log(value.response.first_name); });
    randomNation$.subscribe(function (value) { return console.log(value.response.capital); });
    randomFood$.subscribe(function (value) { return console.log(value.response.dish); });
    rxjs_1.forkJoin([randomNames$, randomNation$, randomFood$]).subscribe(function (_a) {
        var ajxName = _a[0], ajaxCapital = _a[1], ajaxFood = _a[2];
        console.log(ajxName.response.first_name + " is live in " + ajaxCapital.response.capital + " and love to eat " + ajaxFood.response.dish + ".");
    });
});
