import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../shared/models/user.model';
import { ILoginResponse } from '../shared/models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http :HttpClient) { }

  login(user: IUser): Observable<ILoginResponse>{

    return this.http.post<ILoginResponse>('http://localhost:3000/login', user)
  }

  registration(user:IUser): Observable<any> {
    return this.http.post<any>('http://localhost:3000/register', user)
  }

}
