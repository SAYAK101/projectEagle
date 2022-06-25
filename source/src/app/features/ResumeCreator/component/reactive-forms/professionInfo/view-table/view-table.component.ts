import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WorkExperienceDto } from 'src/app/features/Shared/material/models/work-experience-dto';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss']
})
export class ViewTableComponent implements OnInit, OnChanges {

  @Input() table_DATA: WorkExperienceDto[] = [];
  dataSource = this.table_DATA;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = this.table_DATA;
  }

  displayedColumns: string[] = ['name', 'jd', 'yoe', 'flag'];

  ngOnInit() {
  }

  calculateDays(days: number):number{
    return Math.ceil(days / 365);
  }

}
