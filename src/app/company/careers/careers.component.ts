import { Component, OnInit } from '@angular/core';
import { DialogServiceService } from 'src/app/dialog-service.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit{
  constructor(private dservice :DialogServiceService){}
  
  ngOnInit(): void {
    this.dservice.setValidationDetails(true);
    localStorage.setItem('isLoggedIn',JSON.stringify(true));
  }
}
