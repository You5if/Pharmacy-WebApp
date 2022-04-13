import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ava-loc',
  templateUrl: './ava-loc.component.html',
  styleUrls: ['./ava-loc.component.scss']
})
export class AvaLocComponent implements OnInit {

  selected: boolean = false
  num: number
  numId: any
  private routeSub: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.numId = params['id']
    });
  }

  onChange() {
    if (this.num != null) {
      this.selected = true
    }else {
      this.selected = false
    }
  }

  onNext() {
    this.router.navigate(['/availabilitychecker', this.numId, this.num]);
  }
}
