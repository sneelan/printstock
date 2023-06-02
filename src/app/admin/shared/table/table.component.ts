import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {
  PassData:any[]=[];

  @Input() TableData:any[]=[];
  @Input() TableHeader:any[]=[];
  @Input() ShowIndex:boolean=true;
  @Input() BtnData:any[]=[];

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

}
