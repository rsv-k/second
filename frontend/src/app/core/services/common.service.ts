import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root',
})
export class CommonService {
   constructor() {}

   changeId(obj: any): any {
      obj.id = obj._id;
      delete obj._id;
      return obj;
   }
}
