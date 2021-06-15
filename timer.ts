import { Observable, timer } from "rxjs";

const sub2 = timer(2000).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("completed!"),
});

setTimeout(() => {
  sub2.unsubscribe();
}, 1000);

const ourTimer$ = new Observable<number>((subscriber) => {
  const timeId = setTimeout(() => {
    console.log("memory leak?");
    subscriber.next(0);
    subscriber.complete();
  }, 2000);
  return () => {
    clearTimeout(timeId);
  };
  // it will prevent from memory leak
});

const sub1 = ourTimer$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("Completed!"),
});

setTimeout(() => {
  sub1.unsubscribe();
}, 1000);
