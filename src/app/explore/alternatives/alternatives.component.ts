import { Component, IterableDiffers, OnInit } from '@angular/core';
import { DialogServiceService } from 'src/app/dialog-service.service';

@Component({
  selector: 'app-alternatives',
  templateUrl: './alternatives.component.html',
  styleUrls: ['./alternatives.component.css']
})
export class AlternativesComponent implements OnInit{

  domainNameList : string[] = ['Tiny Url Alternative','Bitly Alternative','PixelMe Alternative','Yourls Alternative','Short.io Alternative','Rebrandly Alternative'];
  urlList : string[] = ['tinyurl.com','bitly.com','pixelme.com','yourls.org','short.io','rebrandly.com'];
  alernativeList : AlternativeDomain[] = [];
  constructor(private dservice :DialogServiceService){}
  
  ngOnInit(): void {
      this.addAlternatives();
      this.dservice.setValidationDetails(true);
      localStorage.setItem('isLoggedIn',JSON.stringify(true));
  }

  addAlternatives(){
    for(let i= 0;i<this.domainNameList.length;i++){
      let altItem = new AlternativeDomain(this.domainNameList[i],this.urlList[i]);
      this.alernativeList.push(altItem);
    }
  }

}

class AlternativeDomain{
  
  domainName : string;
  domainUrl : string;
  public constructor(domainName:string,domainUrl:string){
    this.domainName = domainName;
    this.domainUrl = domainUrl;
  }
}
