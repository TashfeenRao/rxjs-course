import { Observable } from "rxjs";

const onservable$ = new Observable<string>((subscriber) => {
  console.log("observable is executed");
  subscriber.next("Tahfeen");
  subscriber.next("Rao"); // these values emit instently after subscribing

  setTimeout(() => {
    subscriber.next("Is learning the rxjs");
  }, 1000);
  setTimeout(() => {
    subscriber.next("I am enjoying to learn");
  }, 3000);
  // These are async values the result came back after some time the it returns the value
});

console.log("before subscription");
onservable$.subscribe((value) => console.log(value));
console.log("After subscription");
