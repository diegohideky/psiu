import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;

  constructor(
    private router: Router,
    private localStoreService: LocalStorageService
  ) { }

  ngOnInit() {
    if (this.localStoreService.isUserLogged()) {
      this.router.navigate(['/']);
    }
  }

  login(): void {
    this.localStoreService.saveUsername(this.username);
    this.router.navigate(['/']);
  }
}
