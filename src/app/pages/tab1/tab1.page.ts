import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from "../../services/shop.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  categories$: Observable<any>;

  constructor( private shopService: ShopService, private router: Router ) {     
    this.categories$ = this.shopService.getCategories()
  }

  details(id) {
    this.router.navigate([`home/tab2/${id}`])
  }


}
