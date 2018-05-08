import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {
  private USERNAME:string = 'username';

  constructor() { }

  saveUsername(username: string): void {
    localStorage.setItem('username', username);
  }

  getUsername(): string {
    return localStorage.getItem(this.USERNAME);
  }

  isUserLogged(): boolean {
    console.log(this.USERNAME);
    return localStorage.getItem(this.USERNAME) !== null;
  }
}
