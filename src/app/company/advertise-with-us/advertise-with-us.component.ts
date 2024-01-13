import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule,FormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { every } from 'rxjs';
import { DialogServiceService } from 'src/app/dialog-service.service';

@Component({
  selector: 'app-advertise-with-us',
  templateUrl: './advertise-with-us.component.html',
  styleUrls: ['./advertise-with-us.component.css']
})
export class AdvertiseWithUsComponent implements OnInit{

  contactForm : FormGroup;

  constructor(private dservice :DialogServiceService,private router:Router,private fb:FormBuilder){}
  
  ngOnInit(): void {
    this.dservice.setValidationDetails(true);
    localStorage.setItem('isLoggedIn',JSON.stringify(true));
    this.contactForm = new FormGroup({
      userName : new FormControl(null,[Validators.required,Validators.minLength(5)]),
      email : new FormControl(null,[Validators.email,Validators.required]),
      mobile : new FormControl(null,[Validators.required,]),
      userReach : new FormControl(null,[Validators.required]),
      companyName : new FormControl(null,[Validators.required])
    });
  }

  goToContactForm(){
    this.router.navigateByUrl('advertise-with-us#contactForm')
  }
  onSubmit(){
    console.log("clciked");
    if(this.contactForm.valid){
      alert("Details Submittted Successfully\nOur Team will contact u soon!!!")
     this.contactForm.reset();
    }
    else{
      console.log("eroor");
    }
  }

  onSubmit1(){
    console.log("hii");
  }
}
