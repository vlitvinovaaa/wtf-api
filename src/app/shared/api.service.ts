import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiKey = environment.apiKey;
  private chatGPTUrl = 'https://api.openai.com/v1/completions';
  private dallEUrl = 'https://api.openai.com/v1/images/generations';

  constructor(private http: HttpClient) { }

  public getCompletion(prompt: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.apiKey);
    const body = {
      model: 'text-davinci-003',
      prompt,
      max_tokens: 50,
      n: 1,
      stop: '\n'
    };
    console.log(this.apiKey);
    return this.http.post<any>(this.chatGPTUrl, body, { headers });
  }

  public generateImage(prompt: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.apiKey);
    const body = {
      model: 'image-alpha-001',
      prompt,
      num_images: 1,
      size: '512x512',
      response_format: 'url'
    };
    return this.http.post<any>(this.dallEUrl, body, { headers });
  }
}
