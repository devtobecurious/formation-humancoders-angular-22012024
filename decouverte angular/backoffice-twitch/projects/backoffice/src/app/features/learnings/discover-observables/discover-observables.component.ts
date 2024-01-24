import { Component, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'twitch-discover-observables',
  standalone: true,
  imports: [],
  templateUrl: './discover-observables.component.html',
  styleUrl: './discover-observables.component.css'
})
export class DiscoverObservablesComponent implements OnInit{
  ngOnInit(): void {
    console.info('DEBUT FONCTION')

    const obs$ = new Observable<number>(observer => { // LAZY : s'exécute si on subscribe !
      console.info('DEBUT OBS');

      // const callback = () => console.info('OBS ASYNC');
      // setTimeout(callback, 0);

      setTimeout(() => {
        observer.next(0); // ça s'exécute après coup (async) or, le complete était sync, donc le next n'a plus de callback
        // observer.complete();
      }, 1500);

      observer.next(11); // Etape 1
      observer.next(10); // Etape 1
      observer.next(9); // Etape 1

      observer.complete();
    });

    obs$
    .pipe(
      map(item => item.toString() + '...'), // 2. abonnement sur le next
      map(item => item + ' --> '), // 3. abonnement sur le next
      tap(item => console.info('tap : ', item)) // 4.
    )
    .subscribe({
      next: item => console.info(item), // 5.
      complete: () => console.info('cest fini !')
    });
    //obs$.subscribe();

    console.info('FIN FONCTION')
  }

}
