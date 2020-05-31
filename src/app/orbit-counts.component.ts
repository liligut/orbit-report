import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];

  typeList : string[];
  
  constructor() { 
    this.typeList = ['Space Debris','Communication','Probe','Positioning','Space Station','Telescope'];
  }

  ngOnInit() {
  }

  countType(type : string):number {
    let count : number = 0;
    for (let i =0;i<this.satellites.length;i++){
      if (this.satellites[i].type.toLocaleLowerCase() === type.toLocaleLowerCase()){
        count += 1;
      }
    }
    return count;
  }

}
