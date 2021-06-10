import { Observable } from "rxjs";

const observable$ = new Observable<number>((subscriber) => {
  let timeout: number = 0;
  console.log("observable executed");
  const intervelId = setInterval(() => {
    console.log("emmited value", timeout); // it will still return values even after unsubscribing because we did not clear the memory inside tear down
    subscriber.next(timeout++);
  }, 1000);
  return () => {
    console.log("tear down logic");
    clearInterval(intervelId); // this will clear the memory of the observable after unsubsxcribing the observable save us from memory leak or side effects
  };
});

const subscription = observable$.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.error(err.message),
  complete: () => console.log("completed"),
});

setTimeout(() => {
  subscription.unsubscribe();
  console.log("Unsubscribed");
}, 7000);
