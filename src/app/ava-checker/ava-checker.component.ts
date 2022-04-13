import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ava-checker',
  templateUrl: './ava-checker.component.html',
  styleUrls: ['./ava-checker.component.scss']
})
export class AvaCheckerComponent implements OnInit {

  selected: boolean = false
  num: number
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onChange() {
    if (this.num != null) {
      this.selected = true
    }else {
      this.selected = false
    }
  }

  onNext() {
    this.router.navigate(['/availabilitychecker', this.num]);
  }

}
