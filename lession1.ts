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

const subscription = observable$.subscribe((value) => console.log(value));
setTimeout(() => {
  subscription.unsubscribe();
  console.log("unsubscribed");
}, 3000);
