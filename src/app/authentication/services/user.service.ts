import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { configurationFactory } from '../auth.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'api/createUser';
  private apiHost = null;
  
  constructor(private httpService: HttpClient) {
    this.apiHost = configurationFactory().apiHost;
  }

  public registerUser(): Observable<any> {
    return this.httpService.post<any>(`${this.apiHost}/${this.baseUrl}`, null);
  }
}
