import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ShopService } from "../../services/shop.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  todo = {
    email: '',
    password: ''
  }

  constructor( private router: Router, private shopService: ShopService ) { }

  ngOnInit() {
  }

  logForm() {
    this.shopService.login(this.todo).subscribe(      
      res => this.router.navigateByUrl('/home'),
      error => console.log(error.status)
    );
  }

}
