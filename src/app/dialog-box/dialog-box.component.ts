import { Component, OnInit } from '@angular/core';
import { DialogServiceService } from '../dialog-service.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit{
  
  userService : string = '';

  constructor(private dservice : DialogServiceService){}
  ngOnInit() : void{
    this.userService = this.dservice.reqService;
  }
}
