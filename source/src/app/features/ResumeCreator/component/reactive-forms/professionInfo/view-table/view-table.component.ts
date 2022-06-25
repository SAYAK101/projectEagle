import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { WorkExperienceDto } from 'src/app/features/Shared/material/models/work-experience-dto';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss']
})
export class ViewTableComponent implements OnInit, OnChanges {

  @Input() table_DATA: WorkExperienceDto[] = [];
  @Output() editItemEvent = new EventEmitter<number>();
  @Output() deleteItemEvent = new EventEmitter<number>();
  dataSource : WorkExperienceDto[] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = this.table_DATA;
  }

  displayedColumns: string[] = ['name', 'jd', 'yoe', 'flag', 'Icons'];

  ngOnInit() {
  }

  calculateDays(days: number): number {
    return Math.ceil(days / 365);
  }

  onEdit(index: number) {
    this.editItemEvent.emit(index);
  }
  onDelete(index: number) {
    this.deleteItemEvent.emit(index);
  }
}
