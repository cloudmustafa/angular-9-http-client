import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = '/api/users/';
  private headconfig = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private http: HttpClient) { }

  // getEmployee(id: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, JSON.stringify(user), httpOptions);
  }

  // updateEmployee(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${id}`, value);
  // }

  // deleteEmployee(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  // }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
