import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private auth: Auth) { }

  async register(email: string, password: string) {
    try {
      const user = await createUserWithEmailAndPassword(this.auth, email, password)
      return user
    } catch (e) {
      return e
    }
  }

  async login(email: string, password: string) {
    try {
      const login = await signInWithEmailAndPassword(this.auth, email, password)
      return login
    } catch (e) {
      return e
    }
  }
}
