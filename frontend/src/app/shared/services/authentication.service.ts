import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { AlertService } from 'src/app/components/alert/alert.service';
import { Router } from '@angular/router';

const users: any[] = [
  { id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'Admin' },
  { id: 2, username: 'turtuvshin', password: '95011011', firstName: 'Turtuvshin', lastName: 'Byambaa' },
  { id: 3, username: 'naraa', password: 'naraa', firstName: 'Naranmandakh', lastName: 'Tsogoo' },
];

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private alerService: AlertService, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    const user = users.find(x => x.username === username && x.password === password);
    if (!user) return throwError({ error: 'Username or password is incorrect' });

    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
    return of({
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      token: 'fake-jwt-token',
    });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}
