import { CanActivateFn} from '@angular/router';
import { DialogServiceService } from './dialog-service.service';
import { inject } from '@angular/core';

export const routeGuardGuard: CanActivateFn = (route, state) => {
  
  const dservice = inject(DialogServiceService);
  let val :boolean;
   dservice.isLoggedIn.subscribe(
    (value:boolean) => {
      val = value;
    }
  )
  return !val;
};

