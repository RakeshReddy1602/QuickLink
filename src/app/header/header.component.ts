import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DialogServiceService } from '../dialog-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy,OnInit{

  isExpanded : boolean = false;
  isProfileExpanded : boolean = false;
  isLoggedIn:boolean;
  private subscription : Subscription;

  constructor(private dservice : DialogServiceService){
    this.subscription = this.dservice.isLoggedIn.subscribe(val => {
      this.isLoggedIn = val;
    });
  }
  ngOnInit(): void {
    const val = localStorage.getItem('isLoggedIn');
    this.isLoggedIn = JSON.parse(val);  
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

  

  toggleMenu(){
    this.isExpanded = !this.isExpanded;
  }

  toggleProfile(){
    this.isProfileExpanded = !this.isProfileExpanded
  }
  
  logOutUser(){
    this.dservice.setValidationDetails(false);
    localStorage.setItem('isLoggedIn',JSON.stringify(false));
  }
  
}
