import { forkJoin, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";

interface User {
  first_name: string;
  capital: string;
  dish: string;
}

const randomNames$ = ajax("https://random-data-api.com/api/name/random_name");
const randomNation$ = ajax(
  "https://random-data-api.com/api/nation/random_nation"
);
const randomFood$ = ajax("https://random-data-api.com/api/food/random_food");

randomNames$.subscribe((value) => console.log(value.response.first_name));
randomNation$.subscribe((value) => console.log(value.response.capital));
randomFood$.subscribe((value) => console.log(value.response.dish));
// this will return responses in different order

forkJoin([randomNames$, randomNation$, randomFood$]).subscribe(
  (ajaxResponses) => {
    console.log(ajaxResponses);
  }
);
// fork join returns response in order in an array as you provide in argument

forkJoin([randomNames$, randomNation$, randomFood$]).subscribe(
  ([ajxName, ajaxCapital, ajaxFood]) => {
    console.log(
      `${ajxName.response.first_name} is live in ${ajaxCapital.response.capital} and love to eat ${ajaxFood.response.dish}.`
    );
  }
);
// array destructuring the response

const a$ = new Observable<string>((subscriber) => {
  setTimeout(() => {
    subscriber.next("a");
    subscriber.complete();
  }, 5000);
  return () => {
    console.log("a terminated");
  };
});

const b$ = new Observable<string>((subscriber) => {
  setTimeout(() => {
    subscriber.error("some thing wrong happened");
  }, 3000);
  return () => {
    console.log("b terminated");
  };
});

// if one of the provided observable completes with error then fork join
// will also completes with error it will not return any successfull
// notification. if it gets error it still runs tear down logic for all provided observables

forkJoin([a$, b$]).subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => console.log("completed"),
});
