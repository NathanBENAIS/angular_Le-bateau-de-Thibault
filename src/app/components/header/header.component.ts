import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
 styleUrls: ['./header.component.scss'],

})


export class HeaderComponent implements OnInit {


  logoHome: SafeResourceUrl;
  logoPanier: SafeResourceUrl;
  constructor(

    private router: Router,

    private sanitizer: DomSanitizer
    ) {


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
