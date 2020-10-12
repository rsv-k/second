import { OnDestroy, Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
   template: '',
})
export abstract class BaseComponent implements OnDestroy {
   destroyed = new Subject();
   constructor() {}
   ngOnDestroy(): void {
      this.destroyed.next();
      this.destroyed.complete();
   }
}
