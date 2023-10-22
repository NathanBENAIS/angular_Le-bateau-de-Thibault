import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Restaurant } from '../../models/Restaurant';
import { RestaurantsService } from '../../service/RestaurantsService';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  restaurantsList?: Restaurant[];
  ImgPoulpe: SafeResourceUrl;


  constructor(

    private router: Router,
    private restaurantsService: RestaurantsService,
    private sanitizer: DomSanitizer
    ) {

      this.ImgPoulpe = this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/poulpe.png');

    }
  ngOnInit() {


       this.restaurantsList = this.restaurantsService.restaurantsList.slice();
  }

  onLoadRestaurant(restaurant: Restaurant) {
    let navigationExtras: NavigationExtras = {
      state: {
        restaurant: restaurant
      },
    };
    this.router.navigate(['restaurants','single-restaurant'], navigationExtras);
  }

}

