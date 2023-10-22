import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Boat } from '../../models/Boat';
import { BoatsService } from '../../service/BoatsService';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.page.html',
  styleUrls: ['./boats.page.scss'],
})
export class BoatsPage implements OnInit {

  boatsList?: Boat[];
  ImgPoulpe: SafeResourceUrl;


  constructor(

    private router: Router,
    private boatsService: BoatsService,
    private sanitizer: DomSanitizer
    ) {

      this.ImgPoulpe = this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/poulpe.png');

    }
  ngOnInit() {


       this.boatsList = this.boatsService.boatsList.slice();
  }

  onLoadboat(boat: Boat) {
    let navigationExtras: NavigationExtras = {
      state: {
        boat: boat
      },
    };
    this.router.navigate(['boats','single-boat'], navigationExtras);
  }

}

