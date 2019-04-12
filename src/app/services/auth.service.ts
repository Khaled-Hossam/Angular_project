import { Injectable } from '@angular/core';
import { User } from '../models/UserModel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username: BehaviorSubject<string> = new BehaviorSubject('Guest');

  constructor() { }

  getName() {
    return this.username.asObservable();
  }

  setName(name: string): void {
    this.username.next(name);
  }
  
}
