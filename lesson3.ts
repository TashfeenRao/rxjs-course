import { Observable, of } from "rxjs";

// const observable$ = of("tashfee", "rao", "hii");

// observable$.subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log("Completed"),
// });
// of creation function send next notification to observer object imidiately

function ourOf(...args: string[]): Observable<string> {
  return new Observable<string>((subscriber) => {
    for (const iterator of args) {
      subscriber.next(iterator);
    }
    subscriber.complete();
  });
}

ourOf("hiii", "hello", "bye").subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("completed"),
});
