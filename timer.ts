import { interval, Observable, timer } from "rxjs";

const sub2 = timer(2000).subscribe({
  //next: (value) => console.log(value),
  //complete: () => console.log("completed!"),
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
  //next: (value) => console.log(value),
  //complete: () => //console.log("Completed!"),
});

setTimeout(() => {
  sub1.unsubscribe();
}, 1000);

// Interval

const sub3 = interval(1000).subscribe({
  // next: (value) => console.log(value),
  // complete: () => console.log("completed!"),
});

setTimeout(() => {
  sub3.unsubscribe();
  //console.log("unsubscribed");
}, 5000);

const ourInterval$ = new Observable<number>((subscriber) => {
  let counter: number = 0;
  const timeId = setInterval(() => {
    console.log("memory leak?");
    subscriber.next(++counter);
  }, 1000);
  return () => {
    clearInterval(timeId);
  };
  // it will prevent from memory leak
});

const sub4 = ourInterval$.subscribe({
  next: (value) => console.log(value),
});

setTimeout(() => {
  sub4.unsubscribe();
  console.log("unsubscribed");
}, 5000);
