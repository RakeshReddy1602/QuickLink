import { Component, OnInit } from '@angular/core';
import { DialogServiceService } from 'src/app/dialog-service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  constructor(private dservice :DialogServiceService){}
  
  ngOnInit(): void {
    this.dservice.setValidationDetails(true);
    localStorage.setItem('isLoggedIn',JSON.stringify(true));
  }
}
