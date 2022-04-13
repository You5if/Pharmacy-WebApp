import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


const ELEMENT_DATA: any[] = [
  {position: 1, name: 'McNimir', weight: 1.0079},
  {position: 2, name: 'Rima', weight: 4.0026},
  {position: 3, name: 'Hialai', weight: 6.941},
  {position: 4, name: 'Aliaa', weight: 9.0122},
  {position: 5, name: 'Pharma', weight: 10.811},
  {position: 6, name: 'AL-Tasamoh', weight: 12.0107},
  {position: 7, name: 'O2', weight: 14.0067},
  {position: 8, name: 'Amipharma', weight: 15.9994},
  {position: 9, name: 'Noor', weight: 18.9984},
  {position: 10, name: 'Ahselah al-tiby', weight: 20.1797},
];

@Component({
  selector: 'app-ava-med',
  templateUrl: './ava-med.component.html',
  styleUrls: ['./ava-med.component.scss']
})
export class AvaMedComponent implements OnInit {

  num: any

  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = [];
  
  private routeSub: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['string']) //log the value of id
      this.num = params['string']
    });

    ELEMENT_DATA.forEach((elem) => {
      elem.weight = this.getRndInteger(1,10)
    })

    this.dataSource = this.chooseRandom(ELEMENT_DATA, this.getRndInteger(1,10))
    var pos: number = 1
    this.dataSource.forEach((e) => {
      e.position = pos
      pos++
    })
  }

  chooseRandom = (arr: any[], num = 1) => {
    const res = [];
    for(let i = 0; i < num; ){
       const random = Math.floor(Math.random() * arr.length);
       if(res.indexOf(arr[random]) !== -1){
          continue;
       };
       res.push(arr[random]);
       i++;
    };
    return res;
 };

 getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

}
