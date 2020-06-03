import { Component, Input, OnChanges } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnChanges {

  @Input() satellites: Satellite[];

  typeList : object[];
  
  constructor() { 
    this.typeList = [{type: 'Space Debris', count: 0 },
                     {type: 'Communication',count: 0 },
                     {type:  'Probe',count: 0 },
                     {type: 'Positioning',count: 0 },
                     {type: 'Space Station',count: 0},
                     {type: 'Telescope',count: 0 }];
  }

  ngOnChanges() {
    for (let type of this.typeList){
      type['count'] = 0;
    } 
    for (let satellite of this.satellites){
      let i: number = 0;
      while (satellite.type.toLowerCase() !== this.typeList[i]['type'].toLowerCase()){
        i++;
      }
      this.typeList[i]['count'] += 1;
    }
  }

}
