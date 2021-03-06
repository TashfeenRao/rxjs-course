import { Observable } from "rxjs";

const onservable$ = new Observable<string>((subscriber) => {
  console.log("observable is executed");
  subscriber.next("Tahfeen");
  subscriber.next("Rao"); // these values emit instently after subscribing

  setTimeout(() => {
    subscriber.next("Is learning the rxjs");
    subscriber.error(new Error("fail to execute")); // it finish the observable next event emiting it goes to tear down logic
  }, 1000);
  setTimeout(() => {
    subscriber.next("I am enjoying to learn");
    subscriber.complete();
  }, 3000);
  // These are async values the result came back after some time the it returns the value

  return () => {
    console.log("teardown logic has run");
    // here we do unsubscriber logic to event so we can avoid memory leak
  };
});

console.log("before subscription");
onservable$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("observable has finished"),
  error: (err) => console.error(err.message),
});
console.log("After subscription");
