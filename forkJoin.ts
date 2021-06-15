import { forkJoin } from "rxjs";
import { ajax } from "rxjs/ajax";

const randomNames$ = ajax("https://random-data-api.com/api/name/random_name");
const randomNation$ = ajax(
  "https://random-data-api.com/api/nation/random_nation"
);
const randomFood$ = ajax("https://random-data-api.com/api/food/random_food");

randomNames$.subscribe((value) => console.log(value.response.first_name));
randomNation$.subscribe((value) => console.log(value.response.capital));
randomFood$.subscribe((value) => console.log(value.response.dish));
// this will return responses in different order

// forkJoin([randomNames$, randomNation$, randomFood$]).subscribe(
//   (ajaxResponses) => {
//     console.log(ajaxResponses);
//   }
// );
// fork join returns response in order in an array as you provide in argument

forkJoin([randomNames$, randomNation$, randomFood$]).subscribe(
  ([ajxName, ajaxCapital, ajaxFood]) => {
    console.log(
      `${ajxName.response.first_name} is live in ${ajaxCapital.response.capital} and love to eat ${ajaxFood.response.dish}.`
    );
  }
);
// array destructuring the response
