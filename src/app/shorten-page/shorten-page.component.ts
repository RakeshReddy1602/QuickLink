import { Component,NgModule, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { FormsModule } from '@angular/forms';
import { UrlShortenServiceService } from '../url-shorten-service.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { DialogServiceService } from '../dialog-service.service';

@Component({
  selector: 'app-shorten-page',
  templateUrl: './shorten-page.component.html',
  styleUrls: ['./shorten-page.component.css']
})
export class ShortenPageComponent implements OnInit {

  showMobileMenu : boolean = true;
  resultLink:string = '';
  isShortened : boolean = false;
  inputUrl:string = '';
  isCopied:boolean = false;
  isValidURL : boolean = true;
  isLoading : boolean = false;

  constructor(private router :Router,private urlService: UrlShortenServiceService,
    private clipBoard:Clipboard,private dservice : DialogServiceService){}

   ngOnInit(): void {
    this.dservice.setValidationDetails(true);
    localStorage.setItem('isLoggedIn',JSON.stringify(true));
   }

  goToAuth(){
    this.router.navigate(['authentication']);

  }

  togggleMobileMenu(){
    this.showMobileMenu = !this.showMobileMenu;
  }
 convertUrl(){
 
  this.isLoading = true;
  this.isCopied = false;
  this.isValidURL = true;
  this.resultLink = ''
  this.urlService.shortenUrl(this.inputUrl)
  .subscribe((response) => {
    this.resultLink = response.shortUrl;
    this.isValidURL = true;
    this.isShortened = true;
    this.isLoading = false;
  },
  (error) => {
    this.resultLink = 'Error in Shortening URL';
    this.isValidURL = false;
    this.isShortened = true;
    this.isLoading = false;
  }

 )
 }

 copyToClipBoard(){

  this.clipBoard.copy(this.resultLink);
  this.isCopied = true;

 }
}
