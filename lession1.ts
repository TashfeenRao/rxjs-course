import { Observable } from "rxjs";

const observable$ = new Observable<string>((subscriber) => {
  console.log("observable is executed");
  setTimeout(() => {
    subscriber.next("tashi");
  }, 2000);
  setTimeout(() => {
    subscriber.next("Rao");
  }, 4000);
});

console.log("subscription 1 has started");
observable$.subscribe((value) => console.log("subscription: 1", value));

setTimeout(() => {
  console.log("subscription 2 has started");
  observable$.subscribe((value) => console.log("subscription: 2", value));
}, 0);

setTimeout(() => {
  console.log("subscription 3 has started");
  observable$.subscribe((value) => console.log("subscription: 3", value));
}, 0);
