import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule,Validators } from '@angular/forms';
import { Routes,Router } from '@angular/router';
import { ShortenPageComponent } from '../shorten-page/shorten-page.component';
import { DialogServiceService } from '../dialog-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit{
  showLoginForm : boolean = true;
  validEmail : boolean = true;
  validPass : boolean = true;

  signInForm : FormGroup;
  signUpForm : FormGroup;

  userEmail : string = '';
  newUserEmail : string ='';
  newPassword:string = '';
  confirmPassword : string ='';
  userPassword : string = '';
  emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  passwordPattern: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-=_+{}\[\]:;<>,.?/~]).{8,}$/;
  isLoggedIn : boolean = false;

  private subscription:Subscription;

  constructor(private router : Router,private dservice:DialogServiceService){
    this.subscription = this.dservice.isLoggedIn.subscribe();
  }

  ngOnInit(){
   this.signInForm = new FormGroup(
   { email:new FormControl(null,Validators.email),
    password:new FormControl(null,Validators.required)}
   )
   this.signUpForm = new FormGroup(
    { newEmail:new FormControl(null,Validators.email),
     newPassword:new FormControl(null,Validators.required),
     confirmPass:new FormControl(null,Validators.required)}

    )

    this.dservice.setValidationDetails(false);
    localStorage.setItem('isLoggedIn',JSON.stringify(false));

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleForm(){
    this.showLoginForm = !this.showLoginForm;
  }

  goToShortenPage(){
    this.dservice.setValidationDetails(true);
    localStorage.setItem('isLoggedIn',JSON.stringify(true));
    console.log('res ' + this.dservice.isLoggedIn);
    this.router.navigate(['/shorten-page']);
    
  }

  validateUserLogin(){
    if(this.validateDetails(this.userEmail,this.userPassword)){
     this.goToShortenPage();
    }
  }

  validateUserSignUp(){
    if(this.validateDetails(this.newUserEmail,this.newPassword)){
     this.goToShortenPage();
    }
    else{
      console.log('error in sign up');
    }
  }

  validateDetails(email,password) : boolean{
    let validEmail = this.emailPattern.test(email) ? true : false;
    let validPass = this.passwordPattern.test(password) ? true : false;
    this.validEmail = validEmail;
    this.validPass = validPass;
    return validEmail && validPass;
  }
}
