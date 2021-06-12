import { from } from "rxjs";

// from creation function takes an array of data or actions and emit events one by one in next and complete
from(["hi", "am", "tashfenn"]).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("completed"),
});

// converting a promiose into observable

const promiseObj = new Promise((resolve, reject) => {
  return resolve("resolved :)");
});

const promiseObj2 = new Promise((resolve, reject) => {
  return reject("rejected :(");
});
const observable$ = from(promiseObj);
const observable2$ = from(promiseObj2);

observable$.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log(err),
  complete: () => console.log("completed"),
});

observable2$.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log(err),
  complete: () => console.log("Completed"),
});
