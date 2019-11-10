import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseURL = 'https://api.stackexchange.com/2.2/';

  constructor(
    private http: HttpClient,
  ) {/** NOP */}

  fetchAnswersByTag = (tag: string): Observable<any> => {
    return this.http.get(`${this.baseURL}tags/${tag}/faq?site=stackoverflow`);
  }

}
