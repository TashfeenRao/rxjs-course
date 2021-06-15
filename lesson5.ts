import { fromEvent, Observable } from "rxjs";

const btn = document.querySelector("button#clickme");

const subscription = fromEvent(btn, "click").subscribe((event) => {
  console.log(event);
});

const ourCreation$ = new Observable<MouseEvent>((subscriber) => {
  function eventHadler(event: MouseEvent) {
    console.log(event);
  }
  btn.addEventListener("click", eventHadler);
  return () => {
    btn.removeEventListener("click", eventHadler);
  };
});

ourCreation$.subscribe({
  next: (event) => console.log(event),
  complete: () => console.log("completed"),
});
subscription.unsubscribe();
