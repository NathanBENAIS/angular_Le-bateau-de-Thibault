import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-boat',
  templateUrl: './single-boat.page.html',
  styleUrls: ['./single-boat.page.scss'],
})
export class SingleBoatPage implements OnInit {
  boatName: any;
  boat:{
    name:string;
    type:string;
    description:string[];
    image: string;
    icon: string;

  } = { name: '',type: '', description:[],image:'',icon:'', };

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.boat =
          this.router.getCurrentNavigation()?.extras.state?.['boat'];
        console.log(this.boat);
      }
    });
  }
  ngOnInit() {}

}
