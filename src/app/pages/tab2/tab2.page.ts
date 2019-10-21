import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShopService } from "../../services/shop.service";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from "../../models/product.model";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {

  products: Product[] = [];
  category: Object;
  subscription: Subscription;

  constructor(private shopService: ShopService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    const productId = this.route.snapshot.paramMap.get('id');
    
    this.subscription = this.shopService.getProductsByCategory(productId)
      .subscribe( category => {
        this.products = category['categories_products'] 
        this.category = category;    
        console.log(category );
          
      });
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();  
  }

}
