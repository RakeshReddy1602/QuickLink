import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogServiceService } from '../dialog-service.service';
import { Subscribable, Subscription } from 'rxjs';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnDestroy,OnInit{

  isLoggedIn : boolean = false;
  subscription:Subscription;

  constructor(private dservice: DialogServiceService){
    this.subscription = this.dservice.isLoggedIn.subscribe(val => {
      this.isLoggedIn = val;
    })
  }

  ngOnInit() : void{
    const val = localStorage.getItem('isLoggedIn');
    this.isLoggedIn = JSON.parse(val);
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }


  openDialogBox(userServie:string){
    this.dservice.showDialogBox(userServie)
  }
}
