import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  logoProd: SafeResourceUrl;
  logoBat: SafeResourceUrl;
  logoRest: SafeResourceUrl;
  logoRec: SafeResourceUrl;
  logoCont: SafeResourceUrl;

  private swipeCoord?: [number, number];
private swipeTime?: number;

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.logoProd = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/poisson.png');
    this.logoBat = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/ancre.png');
    this.logoRest = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/restaurant.png');
    this.logoRec = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/recette.png');
    this.logoCont = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/tourteau.png');
  }

  onGoToContact(){
    this.router.navigate(['/contact']);
  }

  onGoToRecipes(){
    this.router.navigate(['/recipes']);
  }
  onGoToProducts(){
    this.router.navigate(['/products']);
  }
  onGoToBateaux(){
    this.router.navigate(['/boats']);
  }
  onGoToCart(){
    this.router.navigate(['/cart']);
  }
  onGoToRestaurant(){
    this.router.navigate(['/restaurants']);
  }



}
