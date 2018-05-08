import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public username: string;

  constructor(
    private router: Router,
    private localStoreService: LocalStorageService
  ) { }

  ngOnInit() {
    this.verifyUserLogged();
  }

  verifyUserLogged(): void {
    if (!this.localStoreService.isUserLogged()) {
      this.router.navigate(['/login']);
    }
  }

  login(): void {
    this.localStoreService.saveUsername(this.username);
  }

}
