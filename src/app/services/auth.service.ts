import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8081/nutriMax'; // Base URL of your API

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    console.log('Login method called');
    const body = {
      login: username,
      password: password
    };

    return this.http.post<any>(`${this.apiUrl}/user/authentificate`, body)
      .pipe(
        tap(response => {
          console.log('Login successful, response:', response);
          if (response && response.userId) {
            localStorage.setItem('userId', response.userId);
            console.log('userId stored in localStorage:', localStorage.getItem('userId'));
            this.router.navigate(['/home']);
          } else {
            console.error('Login response does not contain userId');
          }
        }),
        catchError(error => {
          if (error.status === 404) {
            console.error('User not found');
          }
          return throwError(error);
        })
      );
  }

  getUserInfo(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user-info`);
  }

  getUserRecipes(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/recipes/${userId}`);
  }
}
