import { Observable } from "rxjs";

const observable$ = new Observable<string>((subscriber) => {
  console.log("observable is executed");
  subscriber.next("tashi");
  subscriber.next("rao");
});

observable$.subscribe((value) => console.log(value));
