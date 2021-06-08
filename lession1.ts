import { Observable } from "rxjs";

const observable$ = new Observable<string>(
  (subscriber: { next: (arg0: string) => void }) => {
    console.log("observable is executed");
    subscriber.next("tahfeen rao does it chnaged? yes :)");
    subscriber.next("talha");
    subscriber.next("umair");
  }
);

observable$.subscribe((value: any) => console.log(value));
