import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getChatResponse(prompt: string): Observable<any> {
    return this.http.post('https://api.openai.com/v1/engine/...', { prompt });
  }

  generateImage(description: string): Observable<any> {
    return this.http.post('https://api.openai.com/v1/images/...', { description });
  }
}
