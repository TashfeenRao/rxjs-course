import { Observable } from "rxjs";

const onservable$ = new Observable<void>((subscriber) => {
  console.log("observable is executed");
});

console.log("before subscription");
onservable$.subscribe();
console.log("After subscription");
