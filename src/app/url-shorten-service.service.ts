import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenServiceService {

  private apiKey = '096e8bfedd4f4855a35bbc887917fd78';
  private apiUrl = 'https://api.rebrandly.com/v1/links';
  constructor(private http:HttpClient) { }

  shortenUrl(longUrl:string):Observable<any>{

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'apikey': this.apiKey,
    });

    const body = {
      destination : longUrl
    }
    return this.http.post(this.apiUrl,body,{headers});
  }
}
