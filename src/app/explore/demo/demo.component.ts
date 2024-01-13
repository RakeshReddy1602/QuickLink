import { Component, OnInit } from '@angular/core';
import { DialogServiceService } from 'src/app/dialog-service.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit{
  constructor(private dservice :DialogServiceService){}
  
  ngOnInit(): void {
      this.dservice.setValidationDetails(true);
     localStorage.setItem('isLoggedIn',JSON.stringify(true));
  }

}
