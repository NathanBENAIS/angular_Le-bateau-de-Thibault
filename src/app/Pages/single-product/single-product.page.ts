import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.page.html',
  styleUrls: ['./single-product.page.scss'],
})
export class SingleProductPage implements OnInit {
  productName: any;
  product:{
    name:string;
    description:string[];
    price: string[];


  } = { name: '', description:[],price:[] };
  ImgPoulpe: SafeResourceUrl;
    logoHome: SafeResourceUrl;
    logoPanier: SafeResourceUrl;
  constructor(private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.product =
          this.router.getCurrentNavigation()?.extras.state?.['product'];
        console.log(this.product);
      }
    });

    this.ImgPoulpe = this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/poulpe.png');
      this.logoPanier = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/cartLogo.png');
       this.logoHome = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/homeLogo.png');

  }
  ngOnInit() {}
  onGoToHome(){
    this.router.navigate(['/home']);
  }

  onGoToPanier(){
    this.router.navigate(['/cart']);
  }
}
