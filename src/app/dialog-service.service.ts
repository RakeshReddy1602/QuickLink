import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { Subject,BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  reqService : string = '';
  private isLoggedInSubject : Subject<boolean> = new Subject<boolean>();
  isLoggedIn = this.isLoggedInSubject.asObservable();

  constructor(private matDialog:MatDialog) {
   }


  showDialogBox(userService :string){
    this.reqService = userService;
    this.matDialog.open(DialogBoxComponent,{
      height:'fit-content'
    })
  }

  getValidationDetails() : boolean{
   let value:boolean;
   this.isLoggedIn.subscribe(val => {
    value = val;
   });
   return value;
  }

  setValidationDetails(value:boolean){
    this.isLoggedInSubject.next(value);
  }
}

