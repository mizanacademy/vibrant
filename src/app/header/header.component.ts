import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  id: string | null | undefined;
  constructor(public router: Router, public route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.id =  params['id'];
        console.log(params);
      }
    )
  }

  gotoExplore() {
    console.log("test");
    this.router.navigate(['explore']);

  }
}
