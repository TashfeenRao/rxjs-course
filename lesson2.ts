import { Observable } from "rxjs";

const onservable$ = new Observable<string>((subscriber) => {
  console.log("observable is executed");
  subscriber.next("Tahfeen");
});

console.log("before subscription");
onservable$.subscribe((value) => console.log(value));
console.log("After subscription");
