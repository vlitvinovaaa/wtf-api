import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenAIService {
  private apiKey = environment.apiKey;
  private chatGPTUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  private dallEUrl = 'https://api.openai.com/v1/images/generations';

  constructor(private http: HttpClient) { }

  public getResult(prompt: string, useChatGPT: boolean): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let body: any;
    let url: string;

    if (useChatGPT) {
      url = this.chatGPTUrl;
      headers.set('Authorization', `${this.apiKey}`);
      body = {
        prompt,
        max_tokens: 50,
        n: 1,
        stop: '\n'
      };
    } else {
      url = this.dallEUrl;
      headers.set('Authorization', `${this.apiKey}`);
      body = {
        model: 'image-alpha-001',
        prompt,
        num_images: 1,
        size: '512x512',
        response_format: 'url'
      };
    }

    return this.http.post<any>(url, body, { headers });
  }
}
